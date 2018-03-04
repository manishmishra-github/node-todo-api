const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, database) {
    var db=database.db('TodoApp');
    var collections=db.collection('todos');
    var co=db.collection('user');


    // collections.insertOne({
    //     title:'somethong',
    //     comp:false
    // },(err,result)=>{
    //     if(err){
    //     return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // })

    // co.insertOne({
    //     name:'manishmishra',
    //     age:27,
    //     job:"student"
    // },(err,result)=>{
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
    // })


})