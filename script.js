var testimonialItems = document.querySelectorAll(".item label");
var timer;
function cycleTestimonials(index) {
   timer = setTimeout(function() {
    var evt;
    if (document.createEvent){
      //If browser = IE, then polyfill
      evt = document.createEvent('MouseEvent');
      evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    } else {
      //If Browser = modern, then create new MouseEvent
      evt = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: 20
          });
    }
    var ele = "." + testimonialItems[index].className;
    var ele2 = document.querySelector(ele)
    ele2.dispatchEvent(evt);
    index++; // Increment the index
    if (index >= testimonialItems.length) {
      index = 0; // Set it back to `0` when it reaches `3`
    }
    cycleTestimonials(index); // recursively call `cycleTestimonials()`
    document.querySelector(".testimonials").addEventListener("click", function() {
      clearTimeout(timer); //stop the carousel when someone clicks on the div
    });
  }, 2000); //adjust scroll speed in miliseconds
}
//run the function
cycleTestimonials(0);




// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;

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



/*Button for download*/
const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);

$$('.button').forEach(button => {

    let count = {
            number: 0
        },
        icon = $('.icon', button),
        iconDiv = $('.icon > div', button),
        arrow = $('.icon .arrow', button),
        countElem = $('span', button),
        svgPath = new Proxy({
            y: null,
            s: null,
            f: null,
            l: null
        }, {
            set(target, key, value) {
                target[key] = value;
                if(target.y !== null && target.s != null && target.f != null && target.l != null) {
                    arrow.innerHTML = getPath(target.y, target.f, target.l, target.s, null);
                }
                return true;
            },
            get(target, key) {
                return target[key];
            }
        });

    svgPath.y = 30;
    svgPath.s = 0;
    svgPath.f = 8;
    svgPath.l = 32;

    button.addEventListener('click', e => {
        if(!button.classList.contains('loading')) {

            if(!button.classList.contains('animation')) {

                button.classList.add('loading', 'animation');

                gsap.to(svgPath, {
                    f: 2,
                    l: 38,
                    duration: .3,
                    delay: .15
                });

                gsap.to(svgPath, {
                    s: .2,
                    y: 16,
                    duration: .8,
                    delay: .15,
                    ease: Elastic.easeOut.config(1, .4)
                });

                gsap.to(count, {
                    number: '100',
                    duration: 3.8,
                    delay: .8,
                    onUpdate() {
                        countElem.innerHTML = Math.round(count.number) + '%';
                    }
                });

                setTimeout(() => {
                    iconDiv.style.setProperty('overflow', 'visible');
                    setTimeout(() => {
                        button.classList.remove('animation');
                    }, 600);
                }, 4820);

            }

        } else {

            if(!button.classList.contains('animation')) {

                button.classList.add('reset');

                gsap.to(svgPath, {
                    f: 8,
                    l: 32,
                    duration: .4
                });

                gsap.to(svgPath, {
                    s: 0,
                    y: 30,
                    duration: .4
                });

                setTimeout(() => {
                    button.classList.remove('loading', 'reset');
                    iconDiv.removeAttribute('style');
                }, 400);

            }

        }
        e.preventDefault();
    });

});

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
            let p = previous || current,
                n = next || current,
                o = {
                    length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                    angle: Math.atan2(n[1] - p[1], n[0] - p[0])
                },
                angle = o.angle + (reverse ? Math.PI : 0),
                length = o.length * smoothing;
            return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
        },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, first, last, smoothing, pointsNew) {
    let points = pointsNew ? pointsNew : [
            [first, 16],
            [20, update],
            [last, 16]
        ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}




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
el.addEventListener('mousemove', handleMove)

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
