// const  MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server!!');
  }
  console.log('Connected to MongoDB server')
// // Show all records
//   db.collection('Todos').find().toArray().then((docs) => {
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));
//   }, (err) => {
//     console.log('Unable to fetch todos', err);
//   });

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

// Find by _id
  // db.collection('Todos').find({
  //   // the ID is hard coded
  //   _id: new ObjectId('5a5fbf64aa81dd16f406b2de')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos clount: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Rami'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });
  db.collection('Users').find({name: 'Rami'}).count().then((count) => {
    console.log(`Users clount: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  // db.close();
});
