// install mongoose and require to use
const mongoose=require('mongoose');
// connect database to file
mongoose.connect('mongodb://0.0.0.0/to_do_list');
//check connection if it is connected or not
const db=mongoose.connection;
//evertime it is on it would look for error
db.on("error", console.error.bind("error connecting to db"));
// it would fireonce if it is connected it would show the message below
db.once('open', function(){
    console.log("successfully connected to database");
})