const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        console.log('PORT', process.env.PORT)
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB connected: ${connect.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Error: ${err.message}`.red)
        process.exit()
    }
}

module.exports = connectDB