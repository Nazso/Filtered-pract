const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/filtered_demo")
    .then(() => console.log('MongoDB connection is successful!'))

    