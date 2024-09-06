import express from 'express'
import {fetchProducts,fetchProduct,insertProduct,deleteProduct,updateProduct} from '../controller/productsController.js'

const router=express.Router()


router.get('/',fetchProducts)
router.post('/',insertProduct)

router
    .route('/:productID')
        .get(fetchProduct)
        .delete(deleteProduct)
        .patch(updateProduct)


export default router