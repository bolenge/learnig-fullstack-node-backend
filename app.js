const expess = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connexion à la base de données
mongoose.connect('mongodb+srv://bolenge:!!Deo1997!!@cluster0.aldck.mongodb.net/go_fullstack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connexion à MongoDB réussie !");
}).catch(() => {
    console.log("Connexion à MongoDB a échoué !");
})

const app = expess();
const Thing = require('./models/Thing');

// Ajout de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });

    thing.save().then(() => res.status(201).json({
        message: "Objet enregistré !"
    })).catch(error => res.status(400).json({error}))
})

app.get('/api/stuff', (req, res) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({error}))
})

app.get('/api/stuff/:id', (req, res) => {
    Thing.findById(req.params.id)
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({error}))
})

module.exports = app