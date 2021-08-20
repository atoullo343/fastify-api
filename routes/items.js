const {
    getItems, 
    getItem, 
    addItem, 
    deleteItem,
    updateItem
} = require('../controllers/items')

// Item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "integer" },
    name: { type: "string" },
  },
};

// Options for get all items
const getItemsOpts = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    },
    handler: getItems
}

const getItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: getItem
}
const postItemOpts = {
    schema: {
        body: {
            type: 'object',
            required: [ 'name' ],
            properties: {
                name: { type: 'string'}
            }
        },
        response: {
            201: Item
        }
    },
    handler: addItem
}

const deleteItemOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    message: { type: 'string' }
                }
            }
        }
    },
    handler: deleteItem
}
const updateItemOpts = {
    schema: {
        response: {
            200: Item
        }
    },
    handler: updateItem
}

function itemRoutes (fastify, options, done){

// GET ALL ITEMS
fastify.get('/items', getItemsOpts)

// GET SINGLE ITEM
fastify.get('/items/:id', getItemOpts)

// ADD NEW ITEM
fastify.post('/items', postItemOpts)

// DELETE ITEM
fastify.delete('/items/:id', deleteItemOpts)

// UPDATE ITEM
fastify.put('/items/:id', updateItemOpts)

    done()
}

module.exports = itemRoutes