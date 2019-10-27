const { Schema, model } = require('mongoose')
const  ObjectId = Schema.ObjectId

const commentSchema = new Schema ({
    image_id: { type: ObjectId },
    name: { type: String },
    email: { type: String },
    gravatar: { type: String },
    comment: { type: String },
    timestamp: { type: Date, default: Date.now }
})

module.exports = model('Comment', commentSchema)