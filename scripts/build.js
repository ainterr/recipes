import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

const recipesPath = path.join(import.meta.dirname, "..", "recipes");
const outputFile = "recipes.ts";
const outputPath = path.join(
  import.meta.dirname,
  "..",
  "src",
  "app",
  outputFile,
);

let data = {};

fs.readdir(recipesPath, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  let i = 0;
  files.forEach((file) => {
    const filePath = path.join(recipesPath, file);
    const name = path.basename(filePath, path.extname(filePath));

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error("Error getting file stats:", err);
        return;
      }

      if (stats.isFile()) {
        data[name] = yaml.load(fs.readFileSync(filePath, "utf8"));

        console.log("[+] parsed: " + file);
      }

      i++;

      if (i == files.length) {
        fs.writeFileSync(
          outputPath,
          "import { Database } from './types';\nexport const RECIPES: Database = " +
            JSON.stringify(data, null, 2) +
            ";",
        );
        console.log("[+] wrote: " + outputFile);
      }
    });
  });
});
