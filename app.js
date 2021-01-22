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

app.use('/api/stuff', (req, res) => {
    const stuff = [
        {
            _id: '5djhd51d2s',
            title: "Mon premier object",
            description: "Les infos du premier objet",
            imageUrl: 'https://cdn.pixabay.com/photo/2020/06/24/14/59/aircraft-5336532_960_720.jpg',
            price: 4900,
            userId: 'violet12345'
        },
        {
            _id: '5djhd51d2s',
            title: "Mon deuxieme object",
            description: "Les infos du deuxieme objet",
            imageUrl: 'https://cdn.pixabay.com/photo/2020/06/24/14/59/aircraft-5336532_960_720.jpg',
            price: 2900,
            userId: 'violet12345'
        }
    ];

    res.status(200).json(stuff);
})

module.exports = app