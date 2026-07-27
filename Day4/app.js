import dotenv from "dotenv"
import http,{createServer} from "http"
import path from "path"
import fs from "fs"
import os from "os";
import process from "process"


dotenv.config()

const app = createServer();

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server Running Sucessfully on https://localhost:${PORT}`);
    
})

const folderPath = path.join(process.cwd(),"Stuents")

fs.mkdir(folderPath , {recursive: true},(e)=>{
    if(e){
        console.log(e);
    }else{
        console.log(`Sucessfully Folder Created`);
        
    }
})

const filePath = path.join(folderPath,"students.text")

fs.writeFile(filePath ,"\n Darvin \n Godson \n Joel \n Jones \n Siva \n Akash" ,(e)=>{
    if(e){
        console.log(e);
    }else{
        console.log("Suceessfully File Created");
    }
})

fs.readFile(filePath,"utf-8",(e,data)=>{
     if(e){
        console.log(e)
    }else{
        console.log(data);
    }
})

fs.appendFile(filePath,"\nDarvin  Thanda Mass",(e)=>{
    if(e){
        console.log(e)
    }else{
        console.log("SuccessFully Append File Created");
    }
})

fs.readFile(filePath,"utf-8",(e,data)=>{
     if(e){
        console.log(e)
    }else{
        console.log(data);
    }
})

fs.unlink(filePath,(e)=>{
    if(e){
        console.log(e);
    }else{
        console.log('Successfully Deleted');
    }
})

const folderTask2 = path.join(process.cwd(),"Projects");
const folders = [
  folderTask2,

  path.join(folderTask2, "public"),
  path.join(folderTask2, "public", "css"),
  path.join(folderTask2, "public", "js"),
  path.join(folderTask2, "public", "images"),

  path.join(folderTask2, "uploads"),
  path.join(folderTask2, "uploads", "documents"),
  path.join(folderTask2, "uploads", "videos"),

  path.join(folderTask2, "config"),

  path.join(folderTask2, "logs"),
];

folders.forEach((folderTask2) => {
  fs.mkdir(folderTask2, { recursive: true }, (error) => {
    if (error) {
      console.log(`Error creating folder: ${folderTask2}`);
    } else {
      console.log(`Folder created: ${folderTask2}`);
    }
  });
});




const nodeVersion = process.version;
const currentWorkingDirectory = process.cwd();
const hostname = os.hostname();
const platform = os.platform();
const architecture = os.arch();
const cpuCount = os.cpus().length;
const totalRAM = os.totalmem();
const freeRAM = os.freemem();
const processID = process.pid;


const totalRAMInGB = (totalRAM / 1024 / 1024 / 1024).toFixed(2);
const freeRAMInGB = (freeRAM / 1024 / 1024 / 1024).toFixed(2);


console.log(`
========================================
       SYSTEM INFORMATION DASHBOARD
========================================

Node Version              : ${nodeVersion}
Current Working Directory : ${currentWorkingDirectory}
Hostname                  : ${hostname}
Platform                  : ${platform}
Architecture              : ${architecture}
CPU Count                 : ${cpuCount}
Total RAM                 : ${totalRAMInGB} GB
Free RAM                  : ${freeRAMInGB} GB
Process ID                : ${processID}

========================================
`);



console.log(`
========================================
       ENVIRONMENT CONFIGURATION
========================================

Application Name : ${process.env.APP_NAME}
Port             : ${process.env.PORT}
Author           : ${process.env.AUTHOR}
Database Name    : ${process.env.DB_NAME}

Node Version     : ${process.version}
Project Folder   : ${process.cwd()}

========================================
`);
