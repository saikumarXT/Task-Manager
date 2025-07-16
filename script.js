

async function addTodo(){
 const response= await axios.get('http://localhost:3001/data')
 const data =response.json();
 console.log(data);
}