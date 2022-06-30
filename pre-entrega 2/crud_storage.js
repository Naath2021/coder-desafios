
const photosSaved = [];

class Photos {
  constructor(name, size, section, date, id) {
    this.name = name;
    this.size = size;
    this.section = section;
    this.date = date;
    this.id = id;
  }
}
// GLOBAL VARS
let indexToDelete; 
let JSONCreatePhoto;

// BUTTONS
let saveBtn = document.getElementById("saveBtn");
let searchBtn = document.getElementById("searchBtn")
let deleteBtn = document.getElementById("deletePhotBtn")
let inputDelete = document.getElementById("photoToDeleteByIndex")

// DATE
const date = new Date();
let formatDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

// CONTAINERS
const fileToUpload = document.querySelector('input[type=file]');
let divContainer = document.getElementById("uploadPhoto")
let divDelete = document.getElementById("deletePHContainer")

// EVENTS
saveBtn.addEventListener("click", createPhoto)
searchBtn.addEventListener("click", addFileToDocument)
deleteBtn.addEventListener("click", deletePhoto)



// FUNCTIONS
function addFileToDocument() {
  let photoName = document.getElementById("photoName");
  let photoSize = document.getElementById("photoSize");
  let photoSection = document.getElementById("inputGroupSelect01");
  let photoDate = formatDate;
  let photoId = photosSaved.length-1;

  let photoInfoRetrieved = JSON.parse(localStorage.getItem("Photos Saved"))

  photoInfoRetrieved.forEach((e, index) => {
    let imgContainer = document.createElement("div")
    divContainer.append(imgContainer)

    let name = document.createElement("h2")
    name.innerText = (`Nombre: ${photoName.value}`)

    const img = new Image()
    let reader = new FileReader();
      reader.onload = function(e) {
        img.src = e.target.result;
        img.width = 200;
      };
    reader.readAsDataURL(fileToUpload.files[index])

    let size = document.createElement("p")
    size.innerText = (`Tamaño: ${photoSize.value} KB`)
    let section = document.createElement("h3")
    section.innerText = (`Sección: ${photoSection.value}`)
    let date = document.createElement("h4")
    date.innerText = (`Fecha: ${photoDate}`)
    let id = document.createElement("h5")
    id.innerText = (`ID: ${photoId}`)

    imgContainer.append(img, name, size, section, date, id)
  });
}


function createPhoto() {
  let photoUploaded;
  let photoName = document.getElementById("photoName");
  let photoSize = document.getElementById("photoSize");
  let photoSection = document.getElementById("inputGroupSelect01");
  let photoDate = formatDate;
  let photoId = photosSaved.length;

  photoUploaded = new Photos(photoName.value, photoSize.value, photoSection.value, photoDate, photoId);
  photosSaved.push(photoUploaded);
  
  JSONCreatePhoto = JSON.stringify(photosSaved);
  localStorage.setItem("Photos Saved", JSONCreatePhoto)
}

function deletePhoto() {
  indexToDelete = inputDelete.value;
  console.log(indexToDelete)
  (indexToDelete > photosSaved.length) ? alert("Sólo puedes agregar el índice de las fotos que subiste") : deletePhotoFromArrAndStorage()
}

function deleteFromArrAndStorage() {
  let JSONDeletePhoto = JSON.parse(JSONCreatePhoto)
  JSONDeletePhoto.splice(indexToDelete,1)
  console.log(indexToDelete)
  localStorage.removeItem(indexToDelete)
}

