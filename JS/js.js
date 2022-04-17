const header = document.querySelector('header');
const doc = document.querySelector('.ala')
console.log(doc)

doc.addEventListener('click', (e) => {
    let displaySideBar = header.style.display; 
    if(displaySideBar == "block"){
        header.style.display = "none";
   
    }else{
        header.style.display = "block";
      
        
    }
})

// .social-icons{
//     display:flex;
//     justify-content: space-between;
//     align-items: center;
//     width: 200px;
//     height: 70px;
//     font-size: 1.9rem;
//     margin:0 auto;
//     color: rgb(153, 159, 230);
// }