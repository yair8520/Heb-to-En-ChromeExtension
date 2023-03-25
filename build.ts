import * as path from "path";
import * as fs from "fs";

const inFile = path.resolve(__dirname, "src/background.ts");
const outFile = path.resolve(__dirname, "out/background.js");

const source = fs.readFileSync(inFile, "utf8");

// Compile TypeScript code to JavaScript
const ts = require("typescript");
const result = ts.transpileModule(source, {
  compilerOptions: {
    target: "ES2020",
    module: "commonjs",
  },
});

// Write compiled JavaScript to output file
fs.writeFileSync(outFile, result.outputText);

// Copy background.js file to root directory
fs.copyFileSync(outFile, path.resolve(__dirname, "background.js"));
