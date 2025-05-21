import express from 'express';

import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controllers.js';


const router= express.Router();

router.get("/", getProducts);
// Request To Add a new product
router.post("/",createProduct);

// To delete the Product with an ID
router.delete("/:id", deleteProduct);
// To Update.
router.put("/:id", updateProduct);

export default router;