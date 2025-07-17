const express = require( 'express');
const app = express();
const cors = require("cors");


   app.use(express.json());
   app.use(cors());
let idIncrement=0;  

let todo = [

    {work:[
        {id:1,
        task:'go to office'},
    ]},


    {fitness:[
        {id:1,
        task:'go to bank'},
     
    ]},

    {personal:[
        {id:1,
        task:'meet friends saturday night',}
    ]},
    
    {finance:[
        {id:1,
        task:'paying house rent'},
  
    ]}
]




    //add to do


    app.get('/data', (req, res) => {
  console.log("GET /data route hit");
  res.json(todo);
});


    app.post('/adds', (req, res) => {
        const id=idIncrement;
        const task=req.body.task;
        todo[3].finance.push({id,task});
        idIncrement++;
        res.json({ message: 'Task added', updatedFinance: todo[3].finance });
    });



    app.delete('/delete/:Id',(req, res) => {
        const ids = parseInt(req.params.Id);
        const index= todo[3].finance.findIndex((Ak) => Ak.id == ids);
        
        if (index !== -1) {
        todo[3].finance.splice(index, 1);
        res.json({ message: 'Deleted successfully', updatedFinance: todo[3].finance });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
    });
    
app.listen(3005, ( ) => { 
    console.log("Server running at http://localhost:3005")
}
)
