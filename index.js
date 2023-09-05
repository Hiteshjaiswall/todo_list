//require express module
const express=require('express');
// giving port
const port=8000;
//require mongo
const db=require("./config/mongoose")
// requiring contact schema
const ToDo=require("./models/todo");
//using functanily of express
const app=express();
// using middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./assets'))
// to do
var todo=[{
    tasks:"studying",
    date:"08/08/2023",
    catagory:"personal"
},
{
    tasks:"cooking",
    date:"08/09/2023",
    catagory:"Other"
}
]
//setting up the home screen 
app.get('/', function(req, res){
    // return res.render('home', {
    //     title:"to-so list",
    //     todo_list:ToDo
    // })
    ToDo.find({})
    .then(todo => {
        return res.render('home' , { 
            title: "to-do-list", 
            todo_list: todo
        });
    })
    .catch(err => {
        console.log('Error in running the function:', err);
    });
})
// add items into the todo list
app.post('/createtodolist', function(req, res){
    // const tasks = req.body.tasks;
    // const catagory = req.body.catagory;
    // const date=req.body.date;
    // todo.push({
    //     tasks: tasks,
    //     date: date,
    //     catagory: catagory,
    // });
    ToDo.create({
        tasks:req.body.tasks,
        date:req.body.date,
        catagory :req.body.catagory,
    })
    .then(newtodo=>{
        console.log("***********", newtodo);
        return res.redirect('back');
    })
    .catch(err=>{
        console.log("error in creating contact:", err);
    })
   //res.redirect('back');
});
//delete items
app.get("/delete", function(req, res){
    let tasks=req.query.tasks;
        let listindex=todo.findIndex(todo=>todo.tasks==tasks);
        if(listindex!=-1){
            todo.splice(listindex, 1);
            return res.redirect('back');
        }
})


//set view engine to ejs
app.set('view engine', 'ejs');
app.listen(port, function(err){
    if(err){
        console.log(`error in runnign the page : ${err}`);
        return;
    }
    console.log(`yes it is working : ${port}`);
});
