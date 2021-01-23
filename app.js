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

// Routers
const stuffRouter = require('./routes/stuff');

// Ajout de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

// Routing
app.use('/api/stuff', stuffRouter);

module.exports = app