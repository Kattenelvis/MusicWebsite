const mongoose = require('mongoose')

const samples = new mongoose.Schema({
    Title:String,
    Audiofile: String
})

module.exports = Sample = mongoose.model('samples', samples)