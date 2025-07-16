 addTodo();

async function addTodo(){
 const res= await axios.get('http://localhost:3001/data');
 console.log(res.data);
document.querySelector('.push').innerHTML=JSON.stringify(res.data);
};