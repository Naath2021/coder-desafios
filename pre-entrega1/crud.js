// // CRUD STANDS FOR CREATE, READ, UPDATE AND DELETE //

// const photosSaved = [];

// class photos {
//   constructor(name, size, direction, album) {
//     this.name = name;
//     this.size = size;
//     this.direction = direction;
//     this.album = album;
//   }
// }

// let conditionToFirstWhile = true;
// while (conditionToFirstWhile) {
//   const crudActions = prompt(
//     "¡Hola! \nEn esta sección podrás: \n1) Agregar fotos. \n2) Buscar fotos. \n3) Editar fotos \n4) Borrar fotos. \n5) Salir. \n¿Qué deseas hacer?"
//   );

//   if (isNaN(crudActions)) {
//     alert("Sólo puedes agregar números.");
//   } else if (crudActions > 5 || crudActions < 0) {
//     alert("Sólo puedes agregar un numero entre el 1 y el 4");
//   }

//   switch (crudActions) {
//     case "1":
//       createPhoto();
//       break;
//     case "2":
//       if (validateList()) {
//         searchPhoto();
//       }
//       break;
//     case "3":
//       if (validateList()) {
//       searchPhoto();
//       updatePhoto();
//       }
//       break;
//     case "4":
//       if (validateList()) {
//       searchPhoto();
//       deletePhoto();
//       alert("Acción realizada exitosamente.");
//       }
//       break;
//     case "5":
//       conditionToFirstWhile = false;
//       break;
//     default:
//       break;
//   }
// }

 // VALIDATION FUNCTIONS
// function validateSize(size) {
//   if (isNaN(size)) {
//     alert("El tamaño de la imagen solo permite números enteros");
//     return true;
//   } else {
//     return false;
//   }
// }

// function validateDirection(direction) {
//   if (direction === "horizontal" || direction === "vertical") {
//     return false;
//   } else {
//     alert(
//       "Escribe solo una de las dos opciones disponibles: horizontal o vertical"
//     );
//     return true;
//   }
// }

// function validateAlbum(album) {
//   if (album === "portafolio" || album === "proyectos") {
//     return false;
//   } else {
//     alert(
//       "Escribe solo una de las dos opciones disponibles: Portafolio o Proyectos"
//     );
//     return true;
//   }
// }

 // SWITCH FUNCTIONS

// function createPhoto() {
//   let photoUploaded;
//   let conditionToCreate = true;
//   while (conditionToCreate) {
//     let photoName = prompt("Ingresa el nombre que tendrá la nueva foto.");
//     let photoSize = 0;
//     let photoDirection = "";
//     let photoAlbum = "";

//     let photoSizeIsValid = true;
//     while (photoSizeIsValid) {
//       photoSize = parseInt(
//         prompt("Ingresa el tamaño total de la foto en KB (Agrega sólo números)")
//       );
//       photoSizeIsValid = validateSize(photoSize);
//     }

//     let photoDirectionIsValid = true;
//     while (photoDirectionIsValid) {
//       photoDirection = prompt(
//         "¿La foto es Vertical u Horizontal?"
//       ).toLowerCase();
//       photoDirectionIsValid = validateDirection(photoDirection);
//     }

//     let photoAlbumIsValid = true;
//     while (photoAlbumIsValid) {
//       photoAlbum = prompt(
//         "Selecciona la sección en donde se alojará la foto.\n- Portafolio. \n- Proyectos."
//       ).toLowerCase();
//       photoAlbumIsValid = validateAlbum(photoAlbum);
//     }

//     alert(
//       `Estás por agregar la fotografía nombre ${photoName}, de ${photoSize}KB, en dirección ${photoDirection}, que se alojará en la sección ${photoAlbum}`
//     );

//     photoUploaded = new photos(
//       photoName,
//       photoSize,
//       photoDirection,
//       photoAlbum
//     );
//     photosSaved.push(photoUploaded);
//     conditionToCreate = false;
//   }
// }

// function searchPhoto() {
//   photosSaved.forEach((element, index) => {
//     alert(
//       `Detalles de tus fotos: \nNombre: ${element.name}, tamaño: ${element.size}, dirección: ${element.direction}, sección: ${element.album} \nINDICE: ${index} (este número te va a servir para eliminar o actualizar esta foto)`
//     );
//   });
// }

// function updatePhoto() {
//   deletePhoto();
//   createPhoto();
// }

// function deletePhoto() {
//   let conditionToDeletePhoto = true;
//   while (conditionToDeletePhoto) {
//     let photoToDelete = prompt("Indica el INDICE de la foto.");

//     if (isNaN(photoToDelete) || photoToDelete < 0 || photoToDelete > photosSaved.length) {
//       alert(
//         "Sólo puedes ingresar el valor de índice que se indicó anteriormente."
//       );
//     } else {
//       photosSaved.splice(photoToDelete, 1);
//       searchPhoto();
//         conditionToDeletePhoto = false;
//     }
//   }
// }

// function validateList(){
//   if (photosSaved.length > 0) {
//     return true;
//   } else {
//     alert("Tu lista está vacía.");
//     return false;
//   }
// }