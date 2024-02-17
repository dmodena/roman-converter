await Bun.build({
  entrypoints: ['./src/converter.ts'],
  outdir: './dist',
  naming: '[name].min.[ext]',
  sourcemap: 'external',
  minify: true,
});
