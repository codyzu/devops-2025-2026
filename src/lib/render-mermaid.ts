import {createHash} from 'node:crypto';
import {mkdir, readFile} from 'node:fs/promises';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execa} from 'execa';
const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '../..');
const cacheDir = join(projectRoot, '.astro', 'mermaid-cache');
const mmdcPath = join(projectRoot, 'node_modules', '.bin', 'mmdc');
const mermaidConfigPath = join(here, 'mermaid.json');

export type MermaidTheme = 'forest' | 'dark';

function isMissingCliError(error: unknown) {
  if (typeof error !== 'object' || error === null) {
    return false;
  }

  const code = 'code' in error ? String(error.code) : '';
  return code === 'ENOENT';
}

export async function renderMermaidSvg(
  chart: string,
  theme: MermaidTheme
): Promise<string> {
  const graphDefinition = chart.trim();
  if (!graphDefinition) {
    return '';
  }

  await mkdir(cacheDir, {recursive: true});

  let configText = '';
  try {
    configText = await readFile(mermaidConfigPath, 'utf8');
  } catch {}

  // Only include output-affecting flags here; input/output paths are derived.
  // Keep a stable, hashable representation and derive CLI args from it.
  const renderOptions = [
    '-b',
    'transparent',
    '-c',
    mermaidConfigPath,
    '-t',
    theme,
  ] as const;

  const hash = createHash('sha256')
    .update(graphDefinition)
    .update('\n---mmdc-render-options---\n')
    .update(JSON.stringify(renderOptions))
    .update('\n---mermaid-config---\n')
    .update(configText)
    .digest('hex');
  const svgId = `mermaid-svg-${hash.slice(0, 16)}`;
  const outputPath = join(cacheDir, `${hash}.svg`);

  try {
    return await readFile(outputPath, 'utf8');
  } catch {}

  try {
    await execa(
      mmdcPath,
      ['-i', '-', '-o', outputPath, ...renderOptions, '-I', svgId],
      {
        cwd: projectRoot,
        input: graphDefinition,
      }
    );
  } catch (error) {
    if (isMissingCliError(error)) {
      throw new Error(
        'Mermaid build-time rendering requires @mermaid-js/mermaid-cli. ' +
          'Install it and ensure `pnpm exec mmdc --version` works.'
      );
    }

    const message = error instanceof Error ? error.message : String(error);
    const stderr =
      typeof error === 'object' &&
      error !== null &&
      'stderr' in error &&
      typeof error.stderr === 'string'
        ? error.stderr.trim()
        : '';
    throw new Error(
      `Failed to render Mermaid diagram with mmdc: ${message}${stderr ? `\n${stderr}` : ''}`
    );
  }
  return readFile(outputPath, 'utf8');
}
