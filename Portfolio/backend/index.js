const Contact = require('./models/Contact');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config({
    path:'./.env'
})

app.use(cors());
app.use(express.json());

        
const fn=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("db Connected")
    }catch(err){
        console.log("ERR:",err);
    }
}
fn();

app.get('/',(req,res)=>{
    res.send("works fine");
})

app.post('/', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.send("ok");
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).send("Error saving contact");
    }
});


app.listen(process.env.PORT,()=>{
    console.log("listening");
})
