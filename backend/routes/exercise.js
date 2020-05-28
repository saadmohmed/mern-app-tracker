const router  = require('express').Router();

let Excersise = require('../models/excersise.model');

router.route('/').get((req,res)=>{
    Excersise.find()
    .then(excersises => res.json(excersises))
    .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req , res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);
    const NewExcersise = new Excersise({username,description,duration,date});

    NewExcersise.save()
    .then(()=>res.json('Excersise added'))
    .catch(err=>res.status(400).json('error : '+ err));
})
module.exports =router;