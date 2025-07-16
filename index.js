const express = require( 'express');
const app = express();
const cors = require("cors");

let id = 0;
let todo = [
    { work:[
            {task:'go to office'},
            {task:'go to clg'},
            { task:'go to boss'},
            {  task:'go to hr'},
    ]},


    {fitness:[{
        task:'go to gym',

    }]},

    { personal:[{
        task:'meet friends saturday night',
      
    }]},
    
    {finance:[{
         task:'paying house rent ',
        }]
    }
]


app.use(cors());
//add to do
    app.get('/data', (req, res) => {
    const tasks=[]
    todo[0].work.forEach(work => {
    let data =work.task;
    console.log(data);  
     console.log(data);  
    tasks.push(data);
    });
    res.json(tasks);
    console.log('tasks are',tasks)
    });

app.listen(3001, ( ) => { 
    console.log("Server running at http://localhost:3000")
}
)

