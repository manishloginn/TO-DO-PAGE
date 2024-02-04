const addbutton = document.getElementById("buttonnn")
const TO_DO = document.getElementById("TO_DO")
const STARTED = Document.getElementById("STARTED")
const COMPLETED = Document.getElementById("COMPLETED")

const deletbuttn = document.getElementById("deletebutton")
const createjs = document.querySelector(".createjs")

let inc = 1
function getnewid() {
    inc++
}

function deleteRow(e) {
    debugger
    e.target.remove();
}






// function additem(event) {
//     const input = document.getElementById("inputtag")
//     const valuee = document.createElement("form")
//     valuee.classList.add("createjs")
//     valuee.setAttribute('draggable', true)
//     valuee.setAttribute('id', inc)
//      valuee.innerHTML = `<input class="checkbox-round" type="checkbox" name="Checkbox" id=${inc}>
//      <label class="createjslable" for=${inc}>${input.value}</label>
//      <button class="createjsbutton" id="deletebutton" onclick="deleteRow(this)"  ><span  class="material-symbols-outlined delet">delete</span></button>
//      `
//      if (input.value == "") {
//         alert("please write something")
//      } else{
//     TO_DO.append(valuee)
//     getnewid()
// }
// }







addbutton.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        detail: e.target.text
    }

    console.log(data.detail.value)

    const input = document.getElementById("inputtag")
    const valuee = document.createElement("form")
    valuee.classList.add("createjs")
    valuee.setAttribute('draggable', true)
    valuee.setAttribute('id', inc)
    valuee.innerHTML = `<input class="checkbox-round" type="checkbox" name="Checkbox" id=${inc}>
     <label class="createjslable" for=${inc}>${data.detail.value}</label>
     <button class="createjsbutton" id="deletebutton" onclick="deleteRow()"  ><span  class="material-symbols-outlined delet">delete</span></button>
     `
    TO_DO.append(valuee)
    getnewid()
    input.value = "";


})


