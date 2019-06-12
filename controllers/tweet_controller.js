const tweets = []
let next_id = 1

let create = (req, res) => {
    const { title, content } = req.body
    const id = next_id++
    const tweet = { id, title, content }
    tweets.push(tweet)
    res.send(tweet)
}

let read = (req, res) => {
    res.send(tweets)
    
}

let show = (req, res) => {
    const tweet = tweets.find(tweet => tweet.id == req.params.id)
    if (tweet) {
        res.send(tweet)
    } else {
        res.sendStatus(404)
    }  
}

let update = (req, res) => {
    const tweet = tweets.find(tweet => tweet.id == req.params.id)
    if (tweet) {
        const { title, content } = req.body
        tweet.title = title
        tweet.content = content
        res.send(tweet)
    } else {
        res.sendStatus(404)
    }  
    
}

let destroy = (req, res) => {
    const tweet = tweets.find(tweet => tweet.id == req.params.id)
    if (tweet) {
        tweets.splice(tweets.indexOf(tweet), 1)
        res.sendStatus(200)
    } else {
        res.sendStatus(404)
    }  
}

module.exports = { create, read, update, destroy, show }