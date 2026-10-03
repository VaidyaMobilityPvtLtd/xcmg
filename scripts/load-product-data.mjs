import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
export function loadProductData(name) {
 const code = ts.transpileModule(fs.readFileSync(`src/app/_data/${name}.ts`, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
 const exports = {};
 vm.runInNewContext(code, {exports, URLSearchParams}, {timeout:1000});
 return exports;
}
