fetch('https://quotes15.p.rapidapi.com/quotes/random/', {
    method: "GET",
    "headers" : {
        'X-RapidAPI-Key': "aa", //false Key
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
})
.then(response => response.json())
.then(response => {
    console.log(response);

    document.querySelector(".quote").innerHTML = response.content;
    document.querySelector(".author").innerHTML = response.originator.name;
})
.catch(error => {
    console.log(error);
})