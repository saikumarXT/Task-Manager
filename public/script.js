

    async function addTodo(){
       
    let valueEl = document.getElementById('input');
    let Value =valueEl.value;
    await axios.post('http://localhost:3004/adds',
        { task : Value})

    valueEl.value='';

    const res= await axios.get('http://localhost:3004/data');
    const dataSet=res.data;
    dataSet[3].finance.forEach((hello)=> {

    let div =document.createElement('div');
    let parGRA = document.createElement('p');

    console.log('value ar e',hello.task);
    
    parGRA.textContent=hello.task;
    div.appendChild(parGRA);
   document.body.appendChild(div);
 });
};
 