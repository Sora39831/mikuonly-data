import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { loadSourceCatalog, root } from "./catalog-lib.mjs";

const { catalog } = await loadSourceCatalog();
await mkdir(path.join(root, "dist"), { recursive: true });
await writeFile(path.join(root, "dist", "catalog.json"), JSON.stringify(catalog));
console.log(JSON.stringify({ ok: true, counts: catalog.meta }, null, 2));
