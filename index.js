const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const chefs = require('./data/chef.json');
const foods = require('./data/foods.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Thai food server running')
})

app.get('/chefs', (req, res) => {
  res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find(chef => chef.id === id);
  res.send(selectedChef);
})

app.get('/foods', (req, res) => {
  res.send(foods)
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})