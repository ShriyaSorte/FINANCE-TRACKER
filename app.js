const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const port = 6001;
const app = express();

app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb+srv://shriyasorte2000:root@cluster0.egofevs.mongodb.net/finance-tracker');
mongoose.connection.once('open', ()=>{
    console.log("Connected to Database");
});

app.use('/api',apiRoutes);

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});