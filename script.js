function displayTime() {
    let element = document.getElementById("date"); 
    let now = new Date();    
    element.innerHTML = now.toLocaleDateString() + " " + now.toLocaleTimeString()

    setTimeout(displayTime, 1000);    
}
window.onload = displayTime;

