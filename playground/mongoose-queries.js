const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const  {ObjectId} = require('mongodb');

//http://mongoosejs.com/docs/queries.html

// var id = '5aa9a486a282db00084ecbc4';
// var id = '5aa9a486a282db00084ecbc411';
var id = '5aa2adc7d4c3e42a0097e53b';

// if (!ObjectId.isValid(id)){
//   return console.log('id not valis');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log(`id: ${id}, not found`);
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => {console.log(e)});

User.findById(id).then((user) => {
  if (!user) {
    return console.log(`id: ${id}, not found`);
  }
  console.log('User By ID', JSON.stringify(user,undefined,2));
}).catch((e) => {console.log(e)});
