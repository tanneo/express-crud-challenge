const express = require('express')
const router = express.Router()
const TweetController = require('./controllers/tweet_controller')

//read route should be on home page. Call tweet controller
router.get('/', TweetController.read)

//create funtion you want to post
router.post('/tweets', TweetController.create)

//retrieve individual tweet
router.get('/tweets/:id', TweetController.show)

//update a record
router.put('/tweets/:id', TweetController.update)

//delete a record
router.delete('/tweets/:id', TweetController.destroy)

module.exports = router