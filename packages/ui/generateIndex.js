const fs = require("fs");
const path = require("path");

const componentsDir = path.join(__dirname, "../ui/src/components/ui");
const indexPath = path.join(__dirname, "./index.tsx");

console.log("Generating index.tsx...", componentsDir, indexPath);

const componentFiles = fs.readdirSync(componentsDir);

const exportStatements = componentFiles
  .filter((file) => file.endsWith(".tsx"))
  .map((file) => {
    const componentName = path.basename(file, ".tsx");
    return `export  * from './src/components/ui/${componentName}';`;
  })
  .join("\n");

const indexContent = `// Auto-generated index.tsx\n\n
"use client";\n\n
${exportStatements}\n
export { ThemeProvider } from "./src/providers/theme-provider";
`;

fs.writeFileSync(indexPath, indexContent);

console.log("index.tsx generated successfully!");
