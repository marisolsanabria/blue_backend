const express = require("express");
const router= express.Router();
const checkAuth=require("../middleware/check-auth");
const productController= require("../controllers/producto")

router.get('',checkAuth,productController.getProductos);
router.post('',checkAuth,productController.addProducto);
router.put('/:id',checkAuth,productController.updateProducto);
router.delete('/:id',checkAuth,productController.deleteProducto);
router.get('/:id',checkAuth,productController.getProducto);


/*router.get('',productController.getProductos);
router.post('',productController.addProducto);
router.put('/:id',productController.updateProducto);
router.delete('/:id',productController.deleteProducto);
router.get('/:id',productController.getProducto);
*/

module.exports = router;
