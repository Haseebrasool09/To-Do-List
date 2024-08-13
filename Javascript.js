const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You Should Write Something");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savedata(); 
}

listcontainer.addEventListener("click", function(cross){
  if(cross.target.tagName === "LI"){
    cross.target.classList.toggle("checked");
    savedata();

  }
  else if( cross.target.tagName === "SPAN"){
    cross.target.parentElement.remove();
    savedata();

  }
}, false); 
function savedata(){
  localStorage.setItem("data", listcontainer.innerHTML);

}
function showtask(){
  listcontainer.innerHTML = localStorage.getItem("data");

}
showtask(); 