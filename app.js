const expess = require('express');

const app = expess();

app.use((req, res) => {
    res.json({
        message: "Votre requête a bien été réçue !"
    })
})

module.exports = app