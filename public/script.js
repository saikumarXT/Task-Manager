        render();    
    async function addTodo(){
    let valueEl = document.getElementById('input');
    let Value =valueEl.value;
 
    await axios.post('http://localhost:3005/adds',
        {task : Value})
    valueEl.value='';
      render(); 
    };


    async function render(){
    let HTML='';
    const res= await axios.get('http://localhost:3005/data');
    const dataSet=res.data;
    dataSet[3].finance.forEach((hello)=> {

   HTML = HTML + `<div> <p>${hello.task}${hello.id} <button onclick='deleted(${hello.id})'>Delete</button> </p>
   
   </div>`
 });
 document.querySelector('.todo-view').innerHTML=HTML;
};


async function deleted(Id){
    await axios.delete(`http://localhost:3005/delete/${Id}`);
     render(); 
    }
 