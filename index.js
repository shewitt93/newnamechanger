const host = "http://localhost:8000"
const nameList = document.querySelector('span');
// btn.addEventListener('click', getMessage);

function changeName(data){
  data.name.forEach(changeName);
};

function changeName(nameData){
  const newp = document.createElement('p');
  newp.textContent = `Name: ${nameData}`
  nameList.append(newp);
};
  
function reverseString() {
  const inputel = document.getElementById('name')
  
  const options = {
    method: "POST",
    body: inputel.value
  };
  
  // Data was undefined yesterday cause we did a mistake when loggin the data
  // what we did was "then(r => console.log(r))" returns the value of console.log() wich is undefined
  // so in the second then() we always had data as undefined just removing the console.log fixed it 
  const displayel = document.getElementById('result')
  fetch(`${host}/reverseString`, options)
    .then(r => r.json())
    .then(data => displayel.innerHTML = `<b>Reversed String :</b> ${data}`)
    .catch(console.warn); 
}
