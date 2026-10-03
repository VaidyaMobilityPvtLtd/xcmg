import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {loadProductData} from './load-product-data.mjs';
const {displayEquipmentCatalog} = loadProductData('displayEquipment');
const {productEditorialByModel, productEditorialKey} = loadProductData('productEditorial');
const models = [...new Set(displayEquipmentCatalog.flatMap(c=>c.subtypes.flatMap(s=>s.models)))];
const keys = new Set(models.map(productEditorialKey));
const report = ['# Product content research', '', 'Reviewed 2026-10-03. Original editorial copy based on XCMG product pages, manufacturer brochures and documented model-family applications. Sources and variant limitations are retained here for editorial review. Existing specification tables require separate reconciliation where a mismatch is noted.', ''];
const counts=[];
for (const model of models) {
 const entry=productEditorialByModel[productEditorialKey(model)];
 assert(entry, `Missing description: ${model}`);
 assert.equal(entry.paragraphs.length,2);
 assert.equal(entry.benefits.length,3);
 assert.equal(entry.applications.length,3);
 const words=[entry.summary,...entry.paragraphs,...entry.benefits,...entry.applications].join(' ').split(/\s+/).length;
 assert(words>=120, `Description too short: ${model} (${words})`);
 assert(entry.sources.length, `Missing research source: ${model}`);
 counts.push(words);
 report.push(`## ${model}`, '', `${words} words including overview, benefits and applications.`, '');
 for(const source of entry.sources) {
  if(source.startsWith('/')) assert(fs.existsSync(path.join('public',source)),`Missing brochure: ${source}`);
  else if (!source.startsWith('https://')) assert(fs.existsSync(source),`Missing internal reference: ${source}`);
  report.push(`- [${source.startsWith('/')?'Manufacturer brochure':source.startsWith('https://')?new URL(source).hostname:'Existing catalog reference'}](${source.startsWith('/')?'public'+source.replaceAll(' ','%20'):source})`);
 }
 if(entry.researchNote) report.push('',`Review note: ${entry.researchNote}`);
 report.push('');
}
for(const key of Object.keys(productEditorialByModel)) assert(keys.has(key),`Unmatched editorial entry: ${key}`);
if(process.argv.includes('--report')) fs.writeFileSync('PRODUCT-CONTENT-RESEARCH.md',report.join('\n'));
console.log(`${models.length} unique models covered; ${Math.min(...counts)}–${Math.max(...counts)} words each. Sources, benefits and applications verified.`);
