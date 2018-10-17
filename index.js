const express = require('express');
const axios = require('axios');

const app = express();


app.use(express.static(__dirname + '/client/build'));

app.get('/events/:city', async (req, res) => {
    const events = [];
    let { data } = await axios.get(`http://api.eventful.com/json/events/search?app_key=rtwRNJGjF32csPmx&?...&location=${req.params.city}&date=today`)
    events.push(data)
    res.json(events)
})
app.get('/events/:city/category/:category', async (req, res) => {
    const events = [];
    let { data } = await axios.get(`http://api.eventful.com/json/events/search?app_key=rtwRNJGjF32csPmx&?...&location=${req.params.city}&category=${req.params.category}&date=today`)
    events.push(data)
    res.json(events)
})
app.get('/img/:keyword', async (req, res) => {
    const images = [];
    let { data } = await axios.get(`https://api.unsplash.com/search/photos?&query=${req.params.keyword}&client_id=e6fc74ee151383d272e0baa254236693152d29360832effd93b02ef2f867dae6`)
    images.push(data)
    res.send(images)
})

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));
