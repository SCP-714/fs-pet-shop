const express = require('express');
const {Client} = require('pg');

const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/pet_shop';
const client = new Client({
    connectionString: connectionString,
})

client.connect();
const app = express()
const port = 2016;

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World!')
    console.log(process.env)
});

app.get('/pets', (req,res)=> {
    client
    .query('SELECT * FROM pets')
    .then(result =>{
        console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
});


app.get('/pets/kind', (req,res)=> {
    client
    .query('SELECT kind FROM pets')
    .then(result =>{
        console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
});


app.get('/pets/:id',(req,res)=>{
    let id=req.params.id
    let pets =req.body
    client
    .query(`SELECT * FROM pets WHERE pets_id = ${id}`)
    .then(result =>{
        console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
});

app.post('/pets', (req,res)=>{
  let pets = req.body;
  let age = pets.age;
  let kind = pets.kind;
  let name = pets.name;

  client.query (`INSERT INTO pets (age, kind, name) VALUES (${age},'${kind}','${name}') RETURNING *`)

  .then(result =>{
    console.log(result.rows[0])
    res.send(result.rows);
})
.catch(e => console.error(e.stack))
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});