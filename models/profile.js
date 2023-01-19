const mongoose = require('mongoose')

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = { Profile }
