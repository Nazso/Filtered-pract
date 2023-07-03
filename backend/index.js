const express = require('express');
const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/filtered_demo")
mongoose.connect("mongodb+srv://Zsolt:ms3a3NztJiRKlVYn@cluster0.zq7ln.mongodb.net/filter_demo")
    .then(() => console.log('MongoDB connection is successful!'))

const All = mongoose.model('User', new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
}))

const app = express();

app.get('/user', async (req, res) => {
    const peopleAll = await All.find()
    res.json(peopleAll);
})


app.listen(3000, () => {
    console.log('App is listening on port: 3000!')
})
    