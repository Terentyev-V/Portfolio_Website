function displayTime() {
    let element = document.getElementById("date"); 
    let now = new Date();    
    element.innerHTML = now.toLocaleDateString() + " " + now.toLocaleTimeString()

    setTimeout(displayTime, 1000);    
}
window.onload = displayTime;

let skill1 = document.getElementById("skill1");
let skill2 = document.getElementById("skill2");
let skill3 = document.getElementById("skill3");
let skill4 = document.getElementById("skill4");
let skill5 = document.getElementById("skill5");
let skill6 = document.getElementById("skill6");
let skill7 = document.getElementById("skill7");

let word1 = document.getElementById("word1");
let word2 = document.getElementById("word2");
let word3 = document.getElementById("word3");
let word4 = document.getElementById("word4");
let word5 = document.getElementById("word5");
let word6 = document.getElementById("word6");
let word7 = document.getElementById("word7");

word1.hidden= true;


skill1.onmousedown = function () {
    word1.hidden = false;
};
skill2.onmousedown = function () {
    document.getElementById('skill2').innerHTML = 'CSS3';
};
skill3.onclick = function () {
    document.getElementById('skill3').innerHTML = 'JavaScript';
};
skill4.onclick = function () {
    document.getElementById('skill4').innerHTML = 'GitHub';
};
skill5.onclick = function () {
    document.getElementById('skill5').innerHTML = 'GIT';
};
skill6.onclick = function () {
    document.getElementById('skill6').innerHTML = 'Microsoft VSC';
};
skill7.onclick = function () {
    document.getElementById('skill7').innerHTML = 'Web Design';
};

skill1.onmouseup = function() {
    word1.hidden = true;
};



