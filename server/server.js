const {ObjectID} = require('mongodb');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) =>{
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    // console.log('Saved todo ', doc);
    res.send(doc);
  }, (e) =>{
    // console.log('Unable to date todo', e)
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) =>{
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
      res.status(400).send(e);
  });
});

//GET /todos/123412234
app.get('/todos/:id', (req, res) =>{
  var id = req.params.id; // this is the 'id' from the url

  if (!ObjectID.isValid(id)){
    return res.status(404).send('is invalid');
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('id not exists');
    }
    res.send({todo: todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};

// var newToto = new Todo({
//   text: 'Cook dinner'
// });

// var newToto = new Todo({
//   // text: 'Cook dinner',
//   text: true
//   // completed: true,
//   // completedAt: 2
// });
//
// newToto.save().then((doc) => {
//   console.log('Saved todo ', doc);
// }, (e) => {
//   console.log('Unable to date todo', e)
// });

// var newUser = new User({
//   email: ' bb@gmail.com                '
// });
//
// newUser.save().then((doc) => {
//   console.log('User saved', JSON.stringify(doc, undefined,2));
// }, (e) => {
//   console.log('Unable to save user', e);
// })
