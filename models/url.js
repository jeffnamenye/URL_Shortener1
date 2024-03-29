const bcrypt = require('bcrypt-nodejs');
require('dotenv').config();
//This sets up my generate module
exports.shortURL = () => {
  // string of letters
  const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let URLId = '';

  //This my for loop which is generating a string
  for (let i = 0; i < 5; i++) {
    URLId += string.charAt(Math.floor(Math.random() * string.length));
  }
  return URLId;
};

//This generates a hash of the users password with salt which helps encrypt it.
exports.generateHash = (payload) => {
  const hash = bcrypt.hashSync(payload, bcrypt.genSaltSync(8));
  //This returns my hashed password
  return hash;
};

//This compares my hashed password
exports.validateHash = (payload) => {
  //This compares my password and returns in BOOLEAN
  const hash = bcrypt.compareSync(payload.password, this.localpassword);
  return hash;
};
