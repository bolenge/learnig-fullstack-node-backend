const expess = require('express');
const bodyParser = require('body-parser');

const app = expess();

// Ajout de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.post('/api/stuff', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
        message: "Objet créé !"
    })
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