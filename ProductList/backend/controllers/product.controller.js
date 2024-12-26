import { Product } from "../models/product.model.js";

export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({}); //here passing empty object to get all the products 
        console.log(products);
        res.status(200).json({success:true, data:products});
    } catch (error) {
        console.error("Error in fetching products",error.message);
        res.status(500).json({success:false, message:"Internal server error"});
    }
}

export const createProduct = async (req,res)=>{
    const product =  req.body; //user gonna send the product data in the body

    if(!product.name || !product.price || !product.image){
        res.status(400).json({success:false, message:"Please fill all the fields"});
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        console.log("Product added successfully");
        res.status(201).json({success:true, data:newProduct, message:"Product added successfully"});
    } catch (error) {
        console.error("Error in adding product",error.message);
        res.status(500).json({success:false, message:"Internal server error"});
    }
}

export const deleteProduct = async (req,res)=>{

    const {id} = req.params;
    console.log("id:",id);

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"});
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true, message:"Product deleted successfully"});
    } catch (error) {
        console.error("Error in deleting product",error.message);
        res.status(404).json({success:false, message:"Product not found"}); 
    }
}

export const updateProduct = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"});
    }

    try {
        const updatedproduct = await Product.findByIdAndUpdate(
            id,
            {
                $set:{
                    name:req.body.name, 
                    price:req.body.price, 
                    image:req.body.image
                }
            },
            {new:true}
        )

        if (!updatedproduct) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }

        res.status(200).json({success:true, data:updatedproduct, message:"Product updated successfully"});

    } catch (error) {
        console.error("Error in updating product",error.message);
        res.status(500).json({success:false, message:"Internal server error"});
        
    }
}