const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const excersiseSchema = new Schema({
    username:{
        type:String,
        required :true,
    },
    description : {type:String,required:true},
    duration : {required:true , type:Number},
    date : {type:Date , required:true},
},
   { timestamps:true,
});
const  Exercise = mongoose.model('Exercise', excersiseSchema);

module.exports = Exercise;