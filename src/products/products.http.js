const uuid = require('uuid')
const ProductsController = require('./products.controller')

const create = (req, res) => {
    const data = req.body
    ProductsController.createProduct(data)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
} 

const getProducts = (req, res) => {
    const data = req.body
    ProductsController.getAllProducts(data)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}

const getProductsBy = (req, res) => {
    const data = req.body
    const id = res.data.id
    ProductsController.getProductById(data, id)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(400).json(err.message)
    })
}

const edit = (req, res) => {
    const id = req.params.id
    const data = req.body
    if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Missing Data" });
      } else if (
        
        !data.title,
        !data.description,
        !data.image,
        !data.price 
      ) {
        return res.status(400).json({message: "All fields must be completed"});
      } else {
        const response = ProductsController.editProduct(id, data)
        return res.status(200).json({
          message: 'Task edited succesfully',
          product: response
        })
      }
}


const remove = (req, res) => {
    const id = req.params.id;
  ProductsController.deleteProduct(id)
    .then((response) => {
      if(response){
        res.status(204).json()
      }else{
        res.status(400).json({
          message: 'Invalid ID'
        })
      }
    })
}

module.exports = {
    create,
    getProducts,
    getProductsBy,
    edit,
    remove
}