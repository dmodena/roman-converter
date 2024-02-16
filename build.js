await Bun.build({
  entrypoints: ['./src/converter.ts'],
  outdir: './dist',
  sourcemap: 'external',
  minify: true,
});
