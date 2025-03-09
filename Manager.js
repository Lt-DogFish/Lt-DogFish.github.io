/*
function fetchHtml(path)
{
	
	try {
		fetch(path).then((response) => {return response.text();}).then((html) => {document.body.innerHTML = html});

	}
	catch(err){
		console.log(err);
	}
	
}
*/
const Main = document.getElementById("main");


const Home = document.getElementById("home");
Home.addEventListener("click", () => 
{
	Main.innerHTML = "<div class='MenuTab'> Test Worked for Home </div>";
});

const Profile = document.getElementById("profile");
Profile.addEventListener("click", () => 
{
	Main.innerHTML = "<div class='MenuTab'> Test Worked for Profile </div>";
});

const Projects = document.getElementById("projects");
Projects.addEventListener("click", () => 
{
	Main.innerHTML = "<div class='MenuTab'> Test Worked for Projects </div>";
});