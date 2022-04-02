const des = document.querySelector(".des");
const strText = des.textContent;

const splitText = strText.split("");
des.textContent = "";


for (let i = 0; i< splitText.length;i++){
    des.innerHTML += "<span>"+splitText[i]+ "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick(){
    const span = des.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;  
    // if (char === splitText.length){
    //     complete();
    //     return;
    // }
}
// function complete(){
//     clearInterval(timer);
//     timer = null;
// }