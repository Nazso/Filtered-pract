const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/filtered_demo")
mongoose.connect("mongodb+srv://Zsolt:ms3a3NztJiRKlVYn@cluster0.zq7ln.mongodb.net/filter_demo")
    .then(() => console.log('MongoDB connection is successful!'))

    