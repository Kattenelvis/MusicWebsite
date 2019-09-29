const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const PORT = process.env.PORT || 5200

app.listen(PORT, () => {
	console.log('Server Started')
})
