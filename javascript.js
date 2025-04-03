const Main = document.getElementById("main");
const Home = document.getElementById("home");
const Profile = document.getElementById("profile");
const Projects = document.getElementById("projects");

fetchAndSetInnerHtml("HTML/homePage.html");


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
		});});

//Content fade in on vieport enter, function
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

/* Work in progress scroll delta DOESNT WORK, HANGS UP MENU TABS*/
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


Home.addEventListener("click", () => fetchAndSetInnerHtml("HTML/homePage.html"));
Profile.addEventListener("click", () => fetchAndSetInnerHtml("HTML/profilePage.html"));
Projects.addEventListener("click", () => fetchAndSetInnerHtml("HTML/projectsPage.html"));

window.addEventListener("scroll", scrollPercent);
function scrollPercent()
{
	var scrollpercent = (Main.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
	
}