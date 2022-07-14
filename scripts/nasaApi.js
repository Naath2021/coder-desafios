//VARS 
const nasaAPIContainer = document.querySelector("#nasaAPI");
const btnToShowNasaInfo = document.querySelector("#btnToShowNasaInfo");


btnToShowNasaInfo.addEventListener("click", loadAPIElements);

function loadAPIElements() {
    const nasaKey = "Yhk4jPMAvwK1Fnbf9E6ZM8RBcEJU69Q2rNZC6v4f";
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`;

    fetch(nasaUrl)
        .then(response => response.json())
        .then(result => showNasaInfo(result))
        .catch(error => {
            console.log(error)
        })
}


function showNasaInfo({ title, explanation, media_type, date, url }) {
    const imgTitle = document.createElement("h3");
    imgTitle.innerText = title;

    const imgExplanation = document.createElement("p");
    imgExplanation.innerText = explanation

    const mediaType = document.createElement("img");
    if (media_type == "image") {
        mediaType.src = url
    } else {
        mediaType.remove
        mediaType.innerHTML = `<iframe src="${url}" title="NASA video" allowfullscreen></iframe>`
    }

    const imgDate = document.createElement("p");
    imgDate.innerText = date;
    nasaAPIContainer.append(imgTitle, imgExplanation, mediaType, imgDate)
}