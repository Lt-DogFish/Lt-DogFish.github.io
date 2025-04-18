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

Home.addEventListener(		"click", function() {fetchAndSetInnerHtml("HTML/homePage.html"); 		trackFadeInElements();});
Profile.addEventListener(	"click", function() {fetchAndSetInnerHtml("HTML/profilePage.html");	 	trackFadeInElements();});
Projects.addEventListener(	"click", function() {fetchAndSetInnerHtml("HTML/projectsPage.html"); 	trackFadeInElements();});






window.onload = function () {
  window.onscroll = scrollPercent;
};

function scrollPercent() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = scrollTop / scrollHeight;

  const scrollAmount = (scrollPercent * 100).toFixed(2); // Optional: show as a percentage
  document.getElementById('scroll').innerHTML = scrollAmount.toString() + '%';
}