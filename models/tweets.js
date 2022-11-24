const mongoose = require('mongoose');


const tweetSchema = mongoose.Schema({
   name : String, 
   username : String, 
   tweet : String, 
   date : Date,
   hashtag : String
});
   

const Tweet = mongoose.model('tweets', tweetSchema);
module.exports = Tweet;