const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=fb142416659044dcacc6830677f3d1e0";

const nameresults = document.querySelector(".nameresult");


async function getName() {


    const response = await fetch(url);

    const results = await response.json();

    const allresults = results.results;

    nameresults.innerHTML = "";



    for (let i = 0; i < allresults.length; i++) {
        console.log(allresults[i].name);
        if (i === 8) {
            break;
        }


        nameresults.innerHTML += `<div class="nameresult">${allresults[i].name}</div>`;
    }





}

getName();





const ratingresults = document.querySelector(".ratingresult");


async function getRating() {


    const ratingresponse = await fetch(url);

    const ratingresults = await ratingresponse.json();

    const allratingresults = ratingresults.results;

    ratingresults.innerHTML = "";



    for (let i = 0; i < allratingresults.length; i++) {
        console.log(allratingresults[i].rating);
        if (i === 8) {
            break;
        }


        ratingresults.innerHTML += `<div class="ratingresult">${allratingresults[i].rating}</div>`;
    }





}

getRating();















