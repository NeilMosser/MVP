const express = require('express');

const app = express();
const PORT = 3000;
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use(express.static(__dirname + '/../../frontend/dist/'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});