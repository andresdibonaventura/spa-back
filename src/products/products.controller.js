
const uuid = require("uuid")
const Products = require("../models/products.model")


const createProduct = async (data) => {
   

   
    const newProduct = await Products.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        image: data.image,
        price: data.price
       

    }) 
    console.log("hola")
    return newProduct
}

const getAllProducts = async () => {
    const data = await Products.findAll()
    return data
}


const getProductById = async (id) => {
    const data = await Products.findOne({
        where:{
            id: id
        }
    })
    return data
}

const deleteProduct = async (id) => {
    const data = await Products.destroy({
        where:{
            id:id
        }
       
    })
    return data
}

const editProduct = async (id, data) => {
    const {...restOfProperties} = data
    const res = await Products.update(
        {restOfProperties},
        {where: {id: id }}
   
    )
    return res

}



module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    editProduct,
    deleteProduct
}