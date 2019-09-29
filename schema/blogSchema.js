const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
	url: { type: String, required: true, unique: true },
	title: { type: String, required: true },
	tags: [{ type: String }],
	description: { type: String, required: true },
	text: { type: String, required: true },
	comments: [
		{
			name: { type: String, required: true },
			comment: { type: String, required: true }
		}
	]
})

module.exports = Blog = mongoose.model('blogs', BlogSchema)
