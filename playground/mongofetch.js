
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, database) {
    var db=database.db('TodoApp');
    var collections=db.collection('todos');
    var co=db.collection('user');

    // collections.find({
    //     _id:new ObjectID('5a9bef10cc61a413c0f9a517')
    // }).toArray().then((docs)=>{
    //     console.log('todos');
    //     console.log(JSON.stringify(docs,undefined,2))
        

    // },(err)=>{
    //     console.log('error')
    // })

    collections.find().count().then((count)=>{
        console.log('todos '+count);
        

    },(err)=>{
        console.log('error')
    })

})