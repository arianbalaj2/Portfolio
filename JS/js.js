const sideBar = document.querySelector('.sidebar');
const sideBar1 = document.querySelector('.sidebar1');
const profile = document.querySelector('.profile');
const description = document.querySelector('.description');
const aboutMe = document.querySelector('.about-me');
const aboutTitle = document.querySelector('.title');


profile.addEventListener('click', (e) => {
    let displaySideBar = sideBar.style.display; 
    let marginProfile = profile.style.marginLeft; 
    if(displaySideBar == "block"){
        sideBar.style.display = "none";
        profile.style.marginLeft = "25px";
        description.style.marginLeft = "0px";
        aboutMe.style.marginLeft = "0%";
        aboutTitle.style.width = "100%";
    }else{
        sideBar.style.display = "block";
        profile.style.marginLeft = "280px";
        description.style.marginLeft = "105px";
        aboutMe.style.marginLeft = "20%";
        aboutTitle.style.width = "75%";
        
    }
})







// function toggleClock() {
//     // get the clock
//     var myClock = document.getElementById('clock');

//     // get the current value of the clock's display property
//     var displaySetting = myClock.style.display;

//     // also get the clock button, so we can change what it says
//     var clockButton = document.getElementById('clockButton');

//     // now toggle the clock and the button text, depending on current state
//     if (displaySetting == 'block') {
//       // clock is visible. hide it
//       myClock.style.display = 'none';
//       // change button text
//       clockButton.innerHTML = 'Show clock';
//     }
//     else {
//       // clock is hidden. show it
//       myClock.style.display = 'block';
//       // change button text
//       clockButton.innerHTML = 'Hide clock';
//     }
//   }



const arian = document.querySelector('.arian');
const arian2 = document.querySelector('.arian2');
const arian3 = document.querySelector('.arian3');
const arian4 = document.querySelector('.aria4');
