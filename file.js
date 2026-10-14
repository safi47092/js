// let y=10;
// let a=16;
// let z=y+a;
// console.log(z);
const button=document.getElementById("chanB");
button.addEventListener("click",function(){
    button.classList.toggle("active-color");
    if(button.classList.contains("active-color")){
button.textContent="Rahma Qurux❤️";
    }else{
        button.textContent="Change Text";
    }
    
});