import express from "express";
import dotenv from "dotenv";
// import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();  // to access the .env variables   // this should be at the top of the file

const app = express();

app.use(express.json());  // to parse the json data, to accept the json data in the body of the request

app.use("/api/products",productRoutes);

// console.log(process.env.MONGODB_URL)   // to check if the env variable is set or not
//.env variables aren't directly accessible in the code, we need to use dotenv package to access them

app.listen(process.env.PORT || 5000,()=>{       //.env file me colon nhi lgate
    connectDB();
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})
