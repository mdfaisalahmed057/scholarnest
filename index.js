import  express  from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser'; 
import  registerform  from "./model/user.js";
import cors from 'cors'
import  connectToDb  from "./connection/db.js";
 dotenv.config();

const app=express()
app.use(express.json())
 
 
connectToDb()
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//post request
 app.post('/register', async (req, res) => {
    try {
         const { Firstname, Lastname, email, phone } = req.body
        console.log(req.body)
        const data = new registerform({ Firstname, Lastname, email, phone })
        await data.save();
        res.status(200).json({ message: 'Registration successful' });

    } catch (err) {
        console.log("error saving data",err.message)
         res.status(500).json({ message: err.message });

    }
})
 
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));