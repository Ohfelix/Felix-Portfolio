const fs = require("fs");
const path = require("path");

const findAppIndex = (directory) => {
  const files = fs.readdirSync(directory);

  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && file === "app-index.js") {
      console.log(`Arquivo app-index.js encontrado em: ${filePath}`);
      return;
    }

    if (stats.isDirectory()) {
      findAppIndex(filePath);
    }
  }
};

// Ensure you're executing from the project root or adjust the path accordingly
const projectRoot = "C:\\Users\\Acer\\Desktop\\portfolio-next"; // Replace with your actual root
findAppIndex(projectRoot);
