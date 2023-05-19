const mongoose = require('mongoose')


const schemaGroupe = new mongoose.Schema({
   nom: {
type:String,
required:true
    },
    nbrEtudiant:{
        type:Number,
    required:true
    }
})


module.exports =mongoose.model('Groupe',schemaGroupe)
