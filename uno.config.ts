import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind4(),
    presetTypography(),
    presetIcons(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,700',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
