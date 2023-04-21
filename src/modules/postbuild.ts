import { globSync } from "glob";
import { appendFileSync, readFileSync, renameSync, unlinkSync, writeFileSync } from "node:fs";

try {
  const filenames = globSync("./src/modules/**/*.d.ts", { ignore: "src/modules/*.d.ts" });

  filenames.forEach((filename) => {
    const tempFilename = `${filename}.tmp`;

    writeFileSync(tempFilename, "import * as Types from '../types';\nimport * as gm from 'graphql-modules';\n");
    appendFileSync(tempFilename, readFileSync(filename));
    unlinkSync(filename);
    renameSync(tempFilename, filename);
  });
} catch (error) {
  console.error(error);
}
