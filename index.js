const express = require('express')
require('./db/mongooes')
const mobilerouter = require('./router/mobile')

const app = express()
const port = 3000


app.use(express.json())
app.use(mobilerouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
