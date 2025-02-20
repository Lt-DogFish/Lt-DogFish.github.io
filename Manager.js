function fetchHtml(path)
{
	try {
		fetch(path).then((response) => {return response.text();}).then((html) => {document.body.innerHTML = html});

	}
	catch(err){
		console.log(err);
	}

}