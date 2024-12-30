import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

const recipesPath = path.join(import.meta.dirname, "..", "recipes");
const outputFile = "recipes.json";
const outputPath = path.join(
  import.meta.dirname,
  "..",
  "src",
  "assets",
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

    fs.stat(filePath, (err, stats) => {
      if (err) {
        console.error("Error getting file stats:", err);
        return;
      }

      if (stats.isFile()) {
        data[file] = yaml.load(fs.readFileSync(filePath, "utf8"));

        console.log("[+] parsed: " + file);
      }

      i++;

      if (i == files.length) {
        fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
        console.log("[+] wrote: " + outputFile);
      }
    });
  });
});
