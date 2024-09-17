import * as esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['src/index.js'],  // Your main JS file
    bundle: true,                   // Bundle all dependencies
    minify: true,                   // Minify the output
    outfile: 'dist/bundle.min.js',  // Output file
    platform: 'node',               // Platform target
    format: 'esm',     // Explicitly set the module format to ES modules
}).catch(() => process.exit(1));
