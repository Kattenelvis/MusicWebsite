const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./schema/db')
const path = require('path')

app.use(cors())
app.use(express.json())
connectDB()

app.get('/', (req, res) => {
	res.send('hello')
})

const PORT = process.env.PORT || 5000
app.use('/api/blogs', require('./routes/blogs'))

//ONLY USE IN PRODUCTION
app.use(express.static(path.join(__dirname, 'frontend/build')))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

app.listen(PORT, () => {
	console.log(`Server Started on ${PORT}`)
})
