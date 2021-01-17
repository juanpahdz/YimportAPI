import {Schema, model} from 'mongoose'

const videoSchema = new Schema ({
    title: {
        required: true,
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url:{
        required: true,
        type: String,
        trim: true,
        unique: true,
    }
},
{
    versionKey: false,
    timestamps: true,

})

export default model('Video',videoSchema)