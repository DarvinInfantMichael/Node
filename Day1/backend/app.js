import dotenv from "dotenv"
import http, { createServer } from "http"

dotenv.config();

const app = createServer();

const PORT = process.env.PORT||3000

app.listen(PORT,()=>{
    console.log(`Server Running At http://localhost:${PORT}`);
})

