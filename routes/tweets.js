var express = require('express');
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





module.exports = router;