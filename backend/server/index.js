const express = require('express');
const songlyrics = require('songlyrics').default


const app = express();
const PORT = 3000;
app.use(express.json());

app.get('/lyrics/*', (req, res) => {
  let songName = req.url;
    songlyrics(songName)
	    .then((lyrics) => res.send(lyrics))
	    .catch(console.warn)
});

app.use(express.static(__dirname + '/../../frontend/dist/'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});