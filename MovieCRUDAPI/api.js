const express = require('express')
const mssql = require('mssql')
const dbConfig = require('./db_config')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));

mssql.connect(dbConfig, (err) => {
    if (err) {
        console.log('SQL Server bağlantısı başarısız oldu:', err);
    } else {
        console.log('SQL Server bağlantısı başarılı.');
    }
});

app.get("/api/movies", (req, res)=>{
    const request = new mssql.Request();

    request.query('SELECT * FROM Movies', (err, result) => {
        if (err) {
            console.log('Kayıtlar getirilirken bir hata oluştu:', err);
            res.status(500).send('Kayıtlar getirilirken bir hata oluştu.');
        } else {
            res.send(result.recordset);
        }
    });
})

app.post("/api/movie",async(req,res)=>{
    try {
        const {name, description, year, imdb} = req.body;
        const request = new mssql.Request();

        request.query(`INSERT INTO Movies (Name, Description, Year, Imdb) VALUES ('${name}', '${description}', '${year}', '${imdb}')`, (err, result) => {
            if (err) {
                console.log('Kayıtlar getirilirken bir hata oluştu:', err);
                res.status(500).send('Kayıtlar getirilirken bir hata oluştu.');
            } else {
                res.send("true");
            }
        });

    } catch (error) {
        
    }
})

app.delete("/api/movies/:id",(req,res)=>{
    var movieId = parseInt(req.params.id);
    const request = new mssql.Request();

    request.query(`DELETE FROM Movies WHERE id = ${movieId};`, (err, result) => {
        if (err) {
            console.log('Film silinirken hata oluştu', err);
            res.status(500).send('Film silinirken hata oluştu');
        } else {
            res.send("true");
        }
    });
})


app.listen(3000,()=>{

})