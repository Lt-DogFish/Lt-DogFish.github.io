const Main = document.getElementById("main");
const Home = document.getElementById("home");
const Profile = document.getElementById("profile");
const Projects = document.getElementById("projects");

const Scroll = document.getElementById("scroll");

fetchAndSetInnerHtml("HTML/homePage.html");
//trackFadeInElements();


//Set inner HTML of index.html's <main>
async function fetchAndSetInnerHtml(path)
{
	try
	{
		await fetch(path)
				.then(response => response.text())
				.then(fetchedHtml => Main.innerHTML = fetchedHtml);
		
	}
	catch(err)
	{
		console.log(err);
	}

	trackFadeInElementsNew();
}

//Menutab button Click animation logic
document.querySelectorAll(".button")
	.forEach(button => {button.addEventListener("click", () => 
		{
			button.classList.add("clicked");
			button.classList.add("MenuTab-noHoverAfterClick");
			button.classList.remove("MenuTab");
			setTimeout(() => 
			{
				button.classList.remove("clicked");
				button.classList.add("MenuTab");
				button.classList.remove("MenuTab-noHoverAfterClick");
			}, 300);
		});
	});

//Content fade in on vieport enter, function
/*
function trackFadeInElements()
{
	document.addEventListener("DOMContentLoaded", function () {
            const elements = document.querySelectorAll(".fade-in");

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show");
                       // observer.unobserve(entry.target); // Stops observing after it fades in
                    }
					else{
						entry.target.classList.remove("show");
					}
                });
            }, { threshold: 0.2 });

            elements.forEach(element => {
                observer.observe(element);
            });
    });
}
*/

function trackFadeInElementsNew()
{
	const elements = document.querySelectorAll(".fade-in");

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add("show");
				// observer.unobserve(entry.target); // optional one-time fade
			}
			else {
				entry.target.classList.remove("show");
			}
		});
	}, { threshold: 0.9 });

	elements.forEach(element => {
		observer.observe(element);
	});
}
/* Work in progress scroll delta DOESNT WORK, HANGS UP MENU TABS
const container = document.querySelector('.scrollable-container');
let previousScrollTop = 0;

container.addEventListener('scroll', () => {
  const currentScrollTop = container.scrollTop;
  const deltaY = currentScrollTop - previousScrollTop;

  if (deltaY > 0) {
    console.log('Scrolled down');
  } else {
    console.log('Scrolled up');
  }

  previousScrollTop = currentScrollTop;
});
*/

Home.addEventListener(		"click", function() {fetchAndSetInnerHtml("HTML/homePage.html"); 		trackFadeInElementsNew();});
/*Profile.addEventListener(	"click", function() {fetchAndSetInnerHtml("HTML/profilePage.html");	 	trackFadeInElementsNew();});*/
Projects.addEventListener(	"click", function() {fetchAndSetInnerHtml("HTML/projectsPage.html"); 	trackFadeInElementsNew();});





/*
window.onload = function () {
  window.onscroll = scrollPercent;
};


function scrollPercent() {
  	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  	const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 	const scrollPercent = scrollTop / scrollHeight;


  	const scrollAmount = (scrollPercent * 100).toFixed(2); // Optional: show as a percentage

	const drawer = document.getElementsByClassName("drawer");
	const currentTop = drawer[0].getBoundingClientRect().top + window.scrollY;
	drawer[0].style.top = (currentTop + (getScrollDelta() * 5)) + "vh";


  	document.getElementById('scroll').innerHTML = scrollAmount.toString() + '%';
}


const previousScrollPosition = 0;
const currentScrollPosition = 0;
function getScrollDelta()
{
	currentScrollPosition = window.scrollY;
	return currentScrollPosition - previousScrollPosition;
	previousScrollPosition = currentScrollPosition;
}*/

let previousScrollY = window.scrollY;
let drawerTopVH = 100; // start off-screen at 100vh

function getScrollDelta() {
	const delta = window.scrollY - previousScrollY;
	previousScrollY = window.scrollY;
	return delta;
}

function moveDrawer() {
	const drawer = document.querySelector(".drawer");
	const vh = window.innerHeight;
	const delta = getScrollDelta();

	// Convert scroll delta from px to vh
	const deltaVH = (delta * -50) / vh;

	// Update drawer position
	drawerTopVH += deltaVH;

	// Clamp it if needed (e.g., between 0 and 100)
	/*drawerTopVH = Math.max(0, Math.min(100, drawerTopVH));*/

	// Apply new position
	drawer.style.top = drawerTopVH + "vh";
}

window.addEventListener("scroll", moveDrawer);

const elements = document.querySelectorAll(".slow-scroll");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const speed = parseFloat(el.dataset.speed) || 0; // fallback to 0 if not set
    const offset = window.scrollY * speed;
    el.style.transform = `translateY(${offset}px)`;
  });
});

/*
function waitForDtTextAndStart() {
  const dtText = document.getElementById("dtText");
  if (!dtText) {
    setTimeout(waitForDtTextAndStart, 100); // try again in 100ms
    return;
  }

  let fps = 0;
  let lastTime = 0;
  let frames = 0;

  function updateTime(time) {
    const deltaTime = time - lastTime;
    frames++;

    if (deltaTime >= 1000) {
      fps = frames;
      frames = 0;
      lastTime = time;
    }

    /*dtText.innerHTML = " | Current Date & Time: " + new Date().toLocaleString() + " | FPS: " + fps + " | ";
    requestAnimationFrame(updateTime);
  }

  requestAnimationFrame(updateTime);
}

waitForDtTextAndStart();*/