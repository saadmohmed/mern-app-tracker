const express = require('express');

const cors = require('cors');

const mongoose  = require('mongoose');

require('dotenv').config();
const uri = process.env.LOCAL_ATLAS;
const app = express();
const port = process.env.PORT || 5000;
mongoose.connect(uri , {useNewUrlParser : true  , useCreateIndex : true ,useUnifiedTopology:true});
const connection = mongoose.connection;


app.use(cors());
app.use(express.json());
try{
    connection.once('open',()=>{
        console.log(`mongodb connected succesfully`);
    })
}catch(err){
    console.log("error connecting to database"+err)
}

const exercise = require('./routes/exercise');

const user = require('./routes/users');
app.use('/exercise',exercise);
app.use('/users',user);
app.listen(port , ()=>{
    console.log(`server start at port : ${port}`);
})