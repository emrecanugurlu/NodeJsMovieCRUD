const express = require('express')
const mssql = require('mssql')
const cors = require('cors')
const db = require('./models');


const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));


app.get("/api/movies", (req, res) => {

    db.Movie.findAll()
        .then(movies => {
            res.send(movies)
        })
})

app.post("/api/movie", async (req, res) => {

    const { name, description, year, imdb } = req.body;
    db.Movie.create({
        name: name,
        description: description,
        year: year,
        imdb: imdb
    }).then(movie => {
        res.send({ message: `${movie.name} başarıyla eklendi.` })
    }).catch(error => {
        res.send(error)
    })

})

app.delete("/api/movies/:id", (req, res) => {
    var movieId = parseInt(req.params.id);

    db.Movie.destroy({
        where: {
            id: movieId
        }
    }).then(() => {
        res.send({ message: `Silme işlemi başarıyla gerçekleştirildi.` })
    }).catch(err => {
        res.send(err)
    })
})

app.put("/api/movie/update/:id", (req, res) => {

    const { name, description, year, imdb } = req.body;
    const id = req.params.id

    db.Movie.update({
        name: name,
        description: description,
        year: year,
        imdb: imdb
    },{
        where : {
            id : id
        }
    }).then(()=>{
        res.send({message : "Güncelleme işlemi başarıyla gerçekleştirildi."})
    }).catch(err =>{
        res.send(err)
    })

})

app.listen(3000, () => {

})