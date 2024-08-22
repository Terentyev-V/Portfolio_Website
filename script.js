const skill = document.querySelector(".skillsinside");

function text11 () {
    document.getElementById('skillName').innerHTML = 'HTML5';
}
function text22 () {
    document.getElementById('skillName').innerHTML = 'CSS3';
}
function text33 () {
    document.getElementById('skillName').innerHTML = 'JavaScript';
}
function text44 () {
    document.getElementById('skillName').innerHTML = 'GitHub';
}
function text55 () {
    document.getElementById('skillName').innerHTML = 'GIT';
}
function text66 () {
    document.getElementById('skillName').innerHTML = 'Microsoft Visual Studio Code';
}
function text77 () {
  document.getElementById('skillName').innerHTML = 'Web Design';
}

// We select the element we want to target
let target = document.querySelector("footer");

let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
let rootElement = document.documentElement;

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
  // The callback will return an array of entries, even if you are only observing a single item
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Show button
      scrollToTopBtn.classList.add("showBtn");
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);





/* Store the element in el */
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
  * Add a listener for mousemove event
  * Which will trigger function 'handleMove'
  * On mousemove
  */
el.addEventListener("mousemove", handleMove);

/* Define function a */
function handleMove(e) {
  /*
    * Get position of mouse cursor
    * With respect to the element
    * On mouseover
    */
  /* Store the x position */
  const xVal = e.layerX
  /* Store the y position */
  const yVal = e.layerY
  
  /*
    * Calculate rotation valuee along the Y-axis
    * Here the multiplier 20 is to
    * Control the rotation
    * You can change the value and see the results
    */
  const yRotation = 20 * ((xVal - width / 2) / width)
  
  /* Calculate the rotation along the X-axis */
  const xRotation = -20 * ((yVal - height / 2) / height)
  
  /* Generate string for CSS transform property */
  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
  
  /* Apply the calculated transformation */
  el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})



/*--------------------- CONTACT ME PAGE ---------------------*/


const name = document.querySelector(".contactsInside");

function text1 () {
    document.getElementById('data').innerHTML = '+48 726341338';
}
function text2 () {
    document.getElementById('data').innerHTML = 'terentyevBlackthorn@gmail.com';
}
function text3 () {
    document.getElementById('data').innerHTML = '+380 507165700';
}
function text4 () {
    document.getElementById('data').innerHTML = '+380 507165700';
}
function text5 () {
    document.getElementById('data').innerHTML = 'www.linkedin.com/in/vladyslav-terentyev';
}
function text6 () {
    document.getElementById('data').innerHTML = 'https://github.com/Terentyev-V';
}
