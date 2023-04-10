const Products = require('../models/product.model')
//Get all Poducts 
// Route GET /api/products
async function getProducts(req, res) {
    try {
        const products = await Products.findAll()
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products));
    } catch (error) {
        console.log(error);
    }
}

//Get single Poducts
// Route GET /api/products/:id
async function getProduct(req, res, id) {
    try {
        const product = await Products.findById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: "Product Not Found" }));
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product));
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct,

}