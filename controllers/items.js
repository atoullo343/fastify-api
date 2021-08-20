let items = require('../Items')

const getItems = (req, reply) => {
    reply.send(items)
}

const getItem = (req, reply) => {
    const { id } = req.params
        const item = items.find( item => item.id === id)
        
        reply.send(item)
}
const addItem = (req, reply) => {
    const { name } = req.body
    const newItem = {
        id: items.length+1,
        name
    }
    items = [...items, newItem]
    reply.code(201).send(newItem)
}
const deleteItem = (req, reply) => {
    const { id } = req.params
    items = items.filter( item => item.id !== id)
    
    reply.send({message: `Item ${id} has been removed`})
}
const updateItem = (req, reply) => {
    const { id } = req.params
    const { name } = req.body
    items.forEach(item => {
        if(item.id == id){
             item.name = name
        }
    })
    const item = items.find( item => item.id === id)
    reply.send(item)
}
module.exports = {
    getItems,
    getItem,
    addItem,
    deleteItem,
    updateItem
}