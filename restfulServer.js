const express =require('express');
const {Client} = require('pg');

const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/pet_shop';
const client = new Client({
    connectionString: connectionString,
})

client.connect();
const app = express()
const port = 4000;

app.get('/', (req,res)=>{
    res.send('Hello World!')
    console.log(process.env)
})

app.get('/pets', (req,res)=> {
    client
    .query('SELECT * FROM pets')
    .then(result =>{
        console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
})


app.get('/pets/kind', (req,res)=> {
    client
    .query('SELECT kind FROM pets')
    .then(result =>{
        console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})