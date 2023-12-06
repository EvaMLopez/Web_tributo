/* const card = document.querySelector(".card");

card.addEventListener("click", function (e) {
  card.classList.toggle('flip');
});


 */


const btn = document.querySelector("btnDisco");

// evento click
btn.addEventListener("click",(e)=>{

 if(deg.transform == "" || deg.transform == "rotateY(0deg)"){
    deg.transform ="rotateY(180deg)";

 }else{
   deg.transform ="rotateY(0deg)";
 }
})