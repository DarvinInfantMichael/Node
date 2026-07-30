import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRouting from "./routes/productRouting.js";
import studentRoute from "./routes/StudentRoute.js";
import orderRoute from "./routes/orderRoute.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRouting);
app.use("/api/students",studentRoute);
app.use("/api/orders",orderRoute)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// http://localhost:5000/api/products

// http://localhost:5000/api/students

// http://localhost:5000/api/orders