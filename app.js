'use strict';


const modal = document.querySelector(".modal");
const modalBtns = document.querySelectorAll(".btn_toggle_modal");
const closeModal = document.querySelector(".close_modal");
// const overlay = document.querySelector(".overlay");


//opening modal
const modalOpenerUtility=function(){
    modal.classList.remove("hidden");
}

//closing modal
const modalCloserUtility = function(){
    modal.classList.add("hidden");
}

for(let  i = 0; i< modalBtns.length;i++){
    modalBtns[i].addEventListener("click",modalOpenerUtility)
}

closeModal.addEventListener("click",modalCloserUtility);
//handling "esc" key press
document.addEventListener("keydown",function(e){
    if(e.key === "Escape")modalCloserUtility();
})
