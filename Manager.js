const Main = document.getElementById("main");
const Home = document.getElementById("home");
fetchAndSetInnerHtml("home.html");
const Profile = document.getElementById("profile");
const Projects = document.getElementById("projects");


async function fetchAndSetInnerHtml(path)
{
	try
	{
		await fetch(path).then(response => response.text()).then(fetchedHtml => Main.innerHTML = fetchedHtml);
	}
	catch(err)
	{
		console.log(err);
	}
}

//Home.addEventListener("click", () => fetchAndSetInnerHtml("index.html"));
Home.addEventListener("click", () => fetchAndSetInnerHtml("home.html"));
Profile.addEventListener("click", () => fetchAndSetInnerHtml("profilePage.html"));
Projects.addEventListener("click", () => fetchAndSetInnerHtml("projectsPage.html"));