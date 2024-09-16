import express from 'express'
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from '../controllers/productsController.js';

const router = express.Router()

/* PRODUCTS  /api/products */
router.get('/', getProducts)

router.get('/:id', getProduct)
router.post('/', postProduct)
router.put('/:id', putProduct)
router.delete('/:id', deleteProduct)

export default router