const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./schema/db')

app.use(cors())
app.use(express.json())
connectDB()

app.get('/', (req, res) => {
	res.send('hello')
})

const PORT = process.env.PORT || 5000
app.use('/api/blogs', require('./routes/blogs'))

app.listen(PORT, () => {
	console.log(`Server Started on ${PORT}`)
})
