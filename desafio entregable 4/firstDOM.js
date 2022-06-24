// const photosSaved = [];

// class Photos {
//   constructor(name, size, section, date, id) {
//     this.name = name;
//     this.size = size;
//     this.section = section;
//     this.date = date;
//     this.id = id;
//   }
// }

// let searchButton = document.getElementsById("search");

// function createPhoto() {
//   let photoUploaded;
//   let photoName = document.getElementById("photoName");
//   let photoSize = document.getElementById("photoSize");
//   let photoSection = document.getElementById("inputGroupSelect01");
//   let photoDate = new Date();
//   let photoId = photosSaved.length;

//   photoUploaded = new Photos(photoName.value, photoSize.value, photoSection.value, photoDate, photoId);

//   photosSaved.push(photoUploaded);
// }

// function searchPhoto() {
//   photosSaved.forEach((element, index) => {
//     alert(
//       `Detalles de tus fotos: \nNombre: ${element.name}, tamaño: ${element.size}, sección: ${element.section}, fecha: ${element.date} \nID: ${element.id}. `
//     );
//   });
// }
