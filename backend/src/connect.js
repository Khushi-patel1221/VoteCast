
const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URI ;

const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
