var mongoose = require('mongoose');

mongoose.promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/todoapp1');

var Todo = mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newTodo = new Todo({
    text:'cook dinner',
    completed:true
})

newTodo.save().then((doc)=>{
console.log(doc)
},(e)=>{console.log(e)})
