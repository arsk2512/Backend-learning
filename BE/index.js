require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/about', (req, res)=> {
    res.send('This is about page')
})


app.get('/login', (req,res) => {
    res.send('<h1> Please login at my app </h1>')
})


app.get('/jokes', (req, res)=> {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            joke: 'Why did the chicken cross the road? To get to the other side!'
        },
        {
            id: 2,
            title: 'Joke 2',    
            joke: 'Why don’t scientists trust atoms? Because they make up everything!'
        },
        {
            id: 3,
            title: 'Joke 3',    
            joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!'
        }
    ]
    res.json(jokes)


})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
