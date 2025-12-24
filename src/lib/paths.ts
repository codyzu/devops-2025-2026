export function withBase(path: string) {
  const base = import.meta.env.BASE_URL;
  const normalized = base.endsWith('/') ? base : `${base}/`;
  const trimmed = path.startsWith('/') ? path.slice(1) : path;
  return `${normalized}${trimmed}`;
}
