const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true
  }
})

module.exports = model('User', UserSchema)
