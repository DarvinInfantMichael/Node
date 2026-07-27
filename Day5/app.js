import fs from "fs";
import path from "path";
import os from "os";
import process from "process";
import dotenv from "dotenv";

dotenv.config();

const rootDir = process.cwd();

const storagePath = path.join(rootDir, "storage");
const reportsPath = path.join(storagePath, "reports");
const backupPath = path.join(storagePath, "backup");

const uploadsPath = path.join(rootDir, "uploads");
const imagesPath = path.join(uploadsPath, "images");
const documentsPath = path.join(uploadsPath, "documents");

const createFolders = async () => {
  await fs.promises.mkdir(reportsPath, { recursive: true });
  await fs.promises.mkdir(backupPath, { recursive: true });
  await fs.promises.mkdir(imagesPath, { recursive: true });
  await fs.promises.mkdir(documentsPath, { recursive: true });

  console.log("All folders created successfully");

  // Create report.txt
  const reportFilePath = path.join(reportsPath, "report.txt");

  await fs.promises.writeFile(
    reportFilePath,
    "This is the original report file.\nFile Manager Project using Node.js."
  );

  console.log("report.txt created successfully");

  // Read file
  const fileData = await fs.promises.readFile(reportFilePath, "utf-8");

  console.log("\nFile Contents:");
  console.log(fileData);

  // System Information
  console.log("\nSystem Information:");
  console.log("Hostname:", os.hostname());
  console.log("Platform:", os.platform());
  console.log("Node Version:", process.version);
  console.log("Current Working Directory:", process.cwd());

  // Environment Variables
  console.log("\nEnvironment Variables:");
  console.log("Application Name:", process.env.APP_NAME);
  console.log("Author Name:", process.env.AUTHOR_NAME);
  console.log("Port:", process.env.PORT);

  // Rename file
  const renamedFilePath = path.join(reportsPath, "daily-report.txt");

  await fs.promises.rename(reportFilePath, renamedFilePath);

  console.log("\nFile renamed successfully");

  // Copy file
  const backupFilePath = path.join(backupPath, "daily-report.txt");

  await fs.promises.copyFile(renamedFilePath, backupFilePath);

  console.log("File copied to backup folder");

  // Delete original file
  await fs.promises.unlink(renamedFilePath);

  console.log("Original file deleted successfully");

  console.log("\nMini File Manager operation completed successfully!");
};

createFolders();