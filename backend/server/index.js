const express = require('express');
const songlyrics = require('songlyrics').default
const { translate } = require('free-translate');


const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static(__dirname + '/../../frontend/dist/'));

app.get('/lyrics/*', (req, res) => {
  let songName = req.url;
    songlyrics(songName)
	    .then((lyrics) => res.send(lyrics))
	    .catch(console.warn)
});

app.post('/translate/*', (req, res) => {

  (async () => {
    console.log(req.body);
    const translatedText = await translate('Olá voce', { from: 'pt', to: 'en' });

    console.log(translatedText); // Hello World
    res.send(translatedText);
  })();
})




app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});