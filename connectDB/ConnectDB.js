const mongoose = require('mongoose')


const URL_DB = 'mongodb://localhost:27017/dbwork'

mongoose.connect(URL_DB)
.then(()=>console.log('Connexion établie'))
.catch(()=>console.log('connexion impossible'))

