// import * as esbuild from 'esbuild';

// esbuild.build({
//     entryPoints: ['src/index.js'],  // Your main JS file
//     bundle: true,                   // Bundle all dependencies
//     minify: true,                   // Minify the output
//     outfile: 'dist/bundle.min.js',  // Output file
//     platform: 'node',               // Platform target
//     format: 'esm',     // Explicitly set the module format to ES modules
// }).catch(() => process.exit(1));


import { build } from "esbuild";

const sharedOptions = {
    entryPoints: ["src/index.js"], // Your source file
    bundle: true, // Bundle all dependencies
    minify: true, // Minify the output
    sourcemap: true, // Optional: generates sourcemaps
    target: "esnext", // Target modern JS
};

// ESM Build
build({
    ...sharedOptions,
    outfile: "dist/bundle.min.js",
    format: "esm",
}).catch(() => process.exit(1));

// CJS Build
build({
    ...sharedOptions,
    outfile: "dist/bundle.cjs",
    format: "cjs",
}).catch(() => process.exit(1));

// build({
//     ...sharedOptions,
//     outfile: "dist/SimilarJS.umd.js",
//     format: "umd",
//     globalName: "SimilarMahesh"
// }).catch((error) => {
//     console.error("Error during UMD build:", error);
//     process.exit(1)
// });

// IIFE Build
build({
    ...sharedOptions,
    outfile: "dist/SimilarJS.iife.js", // IIFE output
    format: "iife",                    // IIFE format
    globalName: "SimilarJS",           // Global variable in the IIFE
}).catch((error) => {
    console.error("Error during IIFE build:", error);
    process.exit(1);
});