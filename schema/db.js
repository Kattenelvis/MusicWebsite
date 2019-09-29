const mongoose = require('mongoose')

const connectDB = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://Katten:1234@mycluster-feumr.mongodb.net/MusicWebsite?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				useCreateIndex: true,
				useFindAndModify: false
			}
		)
		console.log('successful connection to mongoose database')
	} catch {
		console.log("couldn't connect to mongoose database")
		process.exit(1)
	}
}

module.exports = connectDB
