import { Request, Response } from "express";

export function listProducts(req:Request,res:Response){
    res.send("list of products");

}
export function getProductById(req:Request,res:Response){
    res.send("single product");

}
export function createProduct(req:Request,res:Response){
    res.send("product created");

}
export function updateProduct(req:Request,res:Response){
    res.send("product updated");

}
export function deleteProduct(req:Request,res:Response){
    res.send("product deleted");

}