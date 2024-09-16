
import mongoose from "mongoose";
import Product from "../models/productModel.js";

/* PRODUCTS  /api/products */

//GET products    
export const getProducts = async(req,res) => {

    try{
        const products = await Product.find({})
        res.status(200).json({success: true, data: products})

    }catch(error){
        console.error("Error Fetching products: ", error.message)
        res.status(500).json({success: failed, message: 'Server Error'})
    }

}

/*  PRODUCTS */
//POST product   
export const postProduct = async(req, res) => {
    const product = req.body

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success: false, message: 'Please provide all field'})
    }
    const newProduct = new Product(product)

    try{
      await newProduct.save()
      res.status(201).json({success: true, data: newProduct})
    }catch(error){
        console.error("Error create product: ", error.message)
        res.status(500).json({success: failed, message: 'Server Error'})
    }
}

//PRODUCT
//GET A PRODUCT  products/:id
export const getProduct = async(req, res) => {
    const {id} = req.params
    try{
        const product = await Product.findById(id)
        if(product){
           res.status(200).json({success: true, data: product})
        }
        else{
            res.status(400).json({success: false, message: 'Cannot find product'})
        }

    }catch(error){
        console.log("error get a product", error.message)
        res.status(500).json({message: 'Server Error'})
    }
  
    
}
//PUT product     /:id
 export const putProduct = async(req, res) => {

    const { id } = req.params
    const product = req.body
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }

    try{
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true})

        res.status(200).json({success: true, data: updatedProduct})
   } catch(error){
     console.log("error update product", error.message)
     res.status(500).json({message: 'Server Error'})
   }
}

//DELETE product    /:id
export const deleteProduct = async(req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Product Id"})
    }
    
    try{
        await Product.findByIdAndDelete(id)
        res.status(200).json({success: true, message: 'Delete success'})
   } catch(error){
     console.log("error delete product", error.message)
     res.status(500).json({message: 'Server Error'})
   }
}

