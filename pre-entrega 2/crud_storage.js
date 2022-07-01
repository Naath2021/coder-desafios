
const photosSaved = [];

class Photos {
  constructor(name, size, section, date, id, img) {
    this.name = name;
    this.size = size;
    this.section = section;
    this.date = date;
    this.id = id;
    this.img = img
  }
}
// GLOBAL VARS
let indexToDelete;
let JSONCreatePhoto;
let localStorageKey = "Photos Saved";
// let imgContainer = document.createElement("div")

let imgContainer = document.createElement("div")


// BUTTONS
let saveBtn = document.getElementById("saveBtn");
let searchBtn = document.getElementById("searchBtn")
let deleteBtn = document.getElementById("deletePhotoBtn")
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
  let photoId = photosSaved.length - 1;

  let photoInfoRetrieved = getFromLocalStorage(localStorageKey)

  photoInfoRetrieved.forEach((e, index) => {
    divContainer.append(imgContainer)

    let name = document.createElement("h2")
    name.innerText = (`Nombre: ${photoName.value}`)

    const img = new Image()
    let reader = new FileReader();
    reader.onload = function (e) {
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

  photoUploaded = new Photos(photoName.value, photoSize.value, photoSection.value, photoDate, photoId, "img");
  photosSaved.push(photoUploaded);

  setInLocalStorage(photosSaved, localStorageKey)
}

function deleteFromArrAndStorage(id) {
  let photoList = getFromLocalStorage(localStorageKey)
  photoList.splice(id, 1)
  localStorage.removeItem(localStorageKey)
  setInLocalStorage(photoList, localStorageKey)
  divContainer.removeChild(divContainer.firstChild)
}

function deletePhoto() {
  indexToDelete = inputDelete.value;
  console.log(indexToDelete)
  let photoList = getFromLocalStorage(localStorageKey);

  (indexToDelete > photoList.length - 1) ? alert("Sólo puedes agregar el índice de las fotos que subiste") : deleteFromArrAndStorage(indexToDelete)
}

function setInLocalStorage(obj, key) {
  let convertObjToJSON = JSON.stringify(obj)
  localStorage.setItem(key, convertObjToJSON)
}

function getFromLocalStorage(key) {
  let convertJSONToObj = localStorage.getItem(key)
  return JSON.parse(convertJSONToObj)
}



// const blobToBase64 = (blob) => {

//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(blob);
//     reader.onloadend = () => {
//       resolve(reader.result.split(',')[1]);
//     };
//   });
// };