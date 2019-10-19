const express = require('express')
const router = express.Router()
const BlogSchema = require('../schema/blogSchema')

// @path: /api/blogs
router.get('/', async (req, res) => {
	console.log("hiii")
	const blogs = await BlogSchema.find()
	res.send(blogs)
})

router.get('/:id', async (req, res) => {
	console.log("hi")
	const blog = await BlogSchema.findOne({ url: req.params.id })
	res.send(blog)
})

router.post('/', async (req, res) => {
	if (req.headers.password === require('./secretPassword')) {
		const blog = new BlogSchema(req.body)

		await blog.save()
		res.json('success!')
	} else res.status(401).send('Password Required')
})

module.exports = router
