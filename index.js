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

let PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Listening on port " + PORT));