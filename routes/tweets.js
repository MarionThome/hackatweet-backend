var express = require('express');
const { response } = require('../app');
const Tweet = require('../models/tweets');
var router = express.Router();

router.get('/', (req, res) => {
    Tweet.find().then(data => {
        if(data){
            res.json({result : true, data : data})
        }
        else{
            res.json({result : false})
        }
    })
})

router.post('/newtweet', (req,res) => {

    const newTweet = new Tweet({
        name : req.body.name, 
        username : req.body.username, 
        tweet : req.body.tweet, 
        date : new Date(),
        hashtag : req.body.hashtag,
        })

        console.log(newTweet)
    newTweet.save().then(data => {
        res.json({ result : true, data : data})
    })
})

router.get('/:hashtag', (req, res) => {
    Tweet.find({hashtag : req.body.hashtag}).then(data => {
        if(data){
            res.json({result : true, data : data})
        }
        else{
            res.json({result : false})
        }
    })
})

router.delete('/delete', (req,res) => {
    Tweet.deleteOne({tweet : req.body.tweet, username : req.body.username}).then(data => {
       
        if(data.deletedCount > 0){
            res.json({result : true, response: "tweet deleted"})
        }
        else {
            res.json({result: false})
        }
    })
})







module.exports = router;