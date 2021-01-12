import mongoose from 'mongoose'
import config from './config'

(async () => {
    try {
        const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            // user: config.MONGO_USER,
            // pass: config.MONGO_PASSWORD,
        })
        console.log('Database is conected to', db.connection.name);
    } catch (error) {
        console.error(error)
    }

})()