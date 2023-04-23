const express = require("express")
const app = express()
const PORT = 3000

app.use(express.static('public'))

singers = {
    "sontungmtp" : {
        "name" : "SontungMTP",
        "age" : 29,
        "songs" : "Am tham ben em, Con mua ngang qua"},
    "mono" : {
        "name" : "Mono",
        "age" : 22,
        "songs" : "Hello"},
    "den vau" : {
        "name" : "Denvau",
        "age" : 32,
        "songs" : "Dua nhau di tron"}
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})



app.get('/api/:singerName', (req,res) => {
    let singersName = req.params.singerName.toLowerCase()
    if(singers[singersName]){
        res.json(singers[singersName])
    }else{
        res.json('None exits')
    }
    
})


app.listen(PORT, () => {
    console.log(`Listen on Port number ${PORT}`)
})
