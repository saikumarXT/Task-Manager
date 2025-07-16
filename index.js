const express = require( 'express');
const app = express()


let todo = [
    {work:[{
        task:'go to office',

    }]},

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

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)

