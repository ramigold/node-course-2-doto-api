// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server!!');
  }
  console.log('Connected to MongoDB server')

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5aa16a81a4f67a1ecf7ed4f5')
  // }, {
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5a5fc11c958b9e3a94c2ac64')}, {
    $set: {name: 'Dana'},$inc: {age: -7}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
