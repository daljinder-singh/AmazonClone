const selctedItem = require('../Models/selectedProduct')
const AddToCart = async (req, res, next) => {
    const payload = req.body.payload
    const newItem = new selctedItem({
        product_id: payload.product.id,
        quantity: payload.Quantity,
        price: payload.product.price,
        total_price: payload.total,
        users: payload.id
    })
    try{
        await newItem.save()
        return res.status(200).json({message: 'save successful'})
    }catch(err){
        return res.send(400).json({message: 'something went wrong', err})
    }
}

module.exports = AddToCart