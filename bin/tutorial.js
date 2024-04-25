const { execSync } = require("child_process");
const path = require("path");

// Define paths
const srcComponentsPath = path.join(__dirname, "./tutorial/components/");
const destComponentsPath = path.join(__dirname, "../components");

// Define the command to copy directories recursively
const copyCommand = `cp -r ${srcComponentsPath} ${destComponentsPath}`;

try {
  // Execute the copy command
  execSync(copyCommand);
  console.log('Components directory copied successfully.');

  // Additional operations, e.g., copying the tutorial index page
  const srcPagePath = path.join(__dirname, "./tutorial/index.tsx");
  const destPagePath = path.join(__dirname, "../pages/index.tsx");
  execSync(`cp ${srcPagePath} ${destPagePath}`);
  console.log('Tutorial page copied successfully.');
} catch (error) {
  console.error('Error during copying:', error);
}

