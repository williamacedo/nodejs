const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to MongoDB Server');
    } 

    console.log('Connected to MongoDB Server');

    db.collection('Todos').find({
        _id: ObjectID('5baedaa12b974164e04d0877')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, () => {
        console.log('Unable to fetch todos', err);
    });


    db.collection('Todos').find({
        _id: ObjectID('5baedaa12b974164e04d0877')
    }).count().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, () => {
        console.log('Unable to fetch todos', err);
    });
    

    db.close();
});