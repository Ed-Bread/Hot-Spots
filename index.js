const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.static(__dirname + '/client/build'));

app.get('/events/:city', async (req, res) => {
    const events = [];
    let { data } = await axios.get(`http://api.eventful.com/json/events/search?app_key=ENV[EVENT_KEY]&?...&location=${req.params.city}&date=today`)
    events.push(data)
    res.json(events)
})
app.get('/events/:city/category/:category', async (req, res) => {
    const events = [];
    let { data } = await axios.get(`http://api.eventful.com/json/events/search?app_key=ENV[EVENT_KEY]&?...&location=${req.params.city}&category=${req.params.category}&date=today`)
    events.push(data)
    res.json(events)
})
app.get('/img/:keyword', async (req, res) => {
    const images = [];
    let i = Math.floor(Math.random()*10)
    let { data } = await axios.get(`https://api.unsplash.com/search/photos?&query=${req.params.keyword}&page=${i}&client_id=ENV[IMAGE_KEY]`)
    images.push(data)
    res.send(images)
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
