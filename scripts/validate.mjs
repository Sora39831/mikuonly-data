import { loadSourceCatalog, validateCatalog } from "./catalog-lib.mjs";

const { catalog, sourceFiles } = await loadSourceCatalog();
const errors = validateCatalog(catalog, sourceFiles);
if (errors.length) {
  console.error(JSON.stringify({ ok: false, errorCount: errors.length, errors: errors.slice(0, 100) }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ ok: true, counts: catalog.meta }, null, 2));
