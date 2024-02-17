# roman-converter

A library to convert from Roman numbers to Decimal (Hindu-Arabic) numbers and vice-versa.

Library created with TypeScript, using Bun for automated tests, compiling and minification.

## Requirements

Depends on [Bun](https://bun.sh). Created with Bun v1.0.26.

## Usage

### Generate files

1. Install dependencies: `bun install`
2. Generate from source: `bun run build`
3. Files are generated and ready to be used as dependency (Node or browser)
```
+-- dist
|   +-- converter.min.js
|   +-- converter.min.js.map
```

### Using as browser script

1. Import the files before your main script, as modules:

```html
<!-- index.html -->
<head>
...
    <script type="module" src="./lib/converter.min.js"></script>
    <script type="module" src="script.js"></script>
...
</head>
<body>
...
``` 

2. Import the module in your main script:
```JavaScript
// script.js
import { Converter } from './lib/converter.min.js';
...
```

3. Use it (:
```JavaScript
// script.js
...

let value = 0;
value = Converter.toRoman(42); // XLII
value = Converter.toDecimal('MMXXIV'); // 2024
```

## Create your own

To create a lib like this, follow these steps:
1. Install [Bun](https://bun.sh/docs/installation)
2. Create a directory for your package
3. Inside the directory, create the package with bun: `bun init`
4. All good! You can compile with `bun build <filename>` and run tests with `bun test`

If you want to customize the build
1. Create a build file:
```JavaScript
// build.js
await Bun.build({
  entrypoints: ['./src/main-script.ts'],
  outdir: './dist',
  naming: '[name].min.[ext]',
  sourcemap: 'external',
  minify: true,
});
```
2. Add a build script inside `package.json`:
```JSON
...
"scripts": {
  "build": "bun build.js"
},
...
```
3. Run `bun run build`

## Info

Inspired by [Exercism's #48in24 challenge](https://exercism.org/challenges/48in24) I created this lib as a reference on how to use bun for creating modules, including compiling to JavaScript, bundling and minification.

**License** MIT  
**Author** Douglas Modena

MMXXIV
