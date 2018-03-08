// const  MongoClient = require('mongodb').MongoClient;
// next line create 2 objects from 'mongodb'
const  {MongoClient, ObjectId} = require('mongodb');
// // ObjectId will genarait a rundom ObjectID I do not have to use MongoDB Database
// var obj = new ObjectId();
// console.log(obj);

// // Define object
// var user = {name: 'Rami', age: 49};
// // Create Var name and assign the 'name' value from user object
// var {name} = user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server!!');
  }
  console.log('Connected to MongoDB server')

  db.collection('Todos').insertOne({
    text: 'Walk the dog',
    completed: false
  }, (err, result) =>{
    if (err){
      return console.log('Unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  // db.collection('Users').insertOne({
  //   name: 'Rami',
  //   age: 49,
  //   location: 'Johns Creek'
  // }, (err, result) =>{
  //   if (err){
  //     return console.log('Unable to insert User', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  db.close();
});
