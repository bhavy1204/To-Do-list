let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let li = document.querySelector("li");
let input = document.querySelector("input");

btn.addEventListener("click", function () {
    let task = document.createElement("li");
    let Done = document.createElement("button");
    Done.innerText="Done";
    Done.classList.add("Done")
    task.innerText = input.value;
    console.log(input.value);
    ul.appendChild(task);
    task.appendChild(Done);
    input.value = "";
});

ul.addEventListener("click", function(event){
  if(event.target.nodeName == "BUTTON"){
    let parent = event.target.parentElement;
    parent.remove();
  }
});

// let Donebtn = document.querySelectorAll(".done");
// for(Done of Donebtn){
//     Done.addEventListener("click", function(){
//         let parent = this.parentElement;
//         console.log(parent.innerText);
//         parent.remove();
//     });

// };
