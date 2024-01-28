let newItem = ()=>{
  //javascript
  //1. Adding a new item to the list of items: 
  let li = document.createElement("li");
  let inputValue = document.getElementById("input").value;
  li.appendChild(document.createTextNode(inputValue));
  
  if (inputValue === '') alert("You must write something!");
  else document.querySelector('#list').appendChild(li);
  
  //2. Crossing out an item from the list of items:
  let crossOut = ()=> li.classList.toggle("strike"); 
  li.addEventListener("dblclick", crossOut);
  
  //3(i). Adding the delete button "X": 
  let crossOutButton = document.createElement("crossOutButton");
  crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  let deleteListItem = ()=> li.classList.add("delete");
  crossOutButton.addEventListener("click", deleteListItem);
  
  // 4. Reordering the items: 
  $('#list').sortable();
}