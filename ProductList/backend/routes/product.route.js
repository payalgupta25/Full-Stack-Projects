import { Router } from "express";
// import { get } from "mongoose";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../controllers/product.controller.js";

const router = Router();

router.get("/" , getProducts);

router.patch("/:id" , updateProduct)

router.post("/", createProduct)

router.delete("/:id", deleteProduct)

export default router;