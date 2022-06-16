// alert("¡Hola! En esta sección podrás subir fotos a tu portafolio :)");

// const photosSaved = []
// let photoUploaded;

// class photos {
//     constructor(name, size, direction, album){
//         this.name = name;
//         this.size = size;
//         this.direction = direction;
//         this.album = album;
//     }
// }

// function validateSize(size) {
//     if (isNaN(size)) { 
//         alert("El tamaño de la imagen solo permite números enteros")
//         return true
//     } else {return false}
// }

// function validateDirection(direction) {
//     if ((direction == "horizontal") || (direction == "vertical")) {
//         return false
//     } else {
//         alert("Escribe solo una de las dos opciones disponibles: horizontal o vertical");
//         return true}
// }

// function validateAlbum(album) {
//     if ((album == "portafolio") || (album == "proyectos")) {
//         return false
//     } else {
//         alert("Escribe solo una de las dos opciones disponibles: Portafolio o Proyectos")
//         return false}
// }


// let conditionToDoWhile = true;
// while (conditionToDoWhile){

//     let photosToUpload = prompt("¿Cuántas fotos deseas subir? \n(Cantidad máxima actual de 5 por operación.)");
//     if (isNaN(photosToUpload)) {
//         alert("Recuerda que sólo puedes agregar números")
//     } else if (photosToUpload > 5) {
//         alert("Recuerda que sólo puedes agregar hasta 5 fotos.")
//     } else {

//         for (let photo = 0; photo < photosToUpload; photo++) {

//             let photoName = (prompt("Ingresa el nombre que tendrá la foto."));
//             let photoSize = 0;
//             let photoDirection = "";
//             let photoAlbum = "";

//             let photoSizeIsValid = true;
//             while (photoSizeIsValid) {
//                 photoSize = parseInt(prompt("Ingresa el tamaño total de la foto en KB (Agrega sólo números)"));
//                 photoSizeIsValid = validateSize(photoSize);
//             }
            
//             let photoDirectionIsValid = true
//             while (photoDirectionIsValid) {
//                 photoDirection = prompt("¿La foto es Vertical u Horizontal?").toLowerCase();
//                 photoDirectionIsValid = validateDirection(photoDirection)
//             }

//             let photoAlbumIsValid = true
//             while (photoAlbumIsValid) {
//                 photoAlbum = prompt("Selecciona la sección en donde se alojará la foto.\n- Portafolio. \n- Proyectos.").toLowerCase();
//                 photoAlbumIsValid = validateAlbum(photoAlbum);
//             }

//             alert("Estás por agregar la fotografía nombre: " + photoName + ", de " + photoSize + "KB, en modo " + photoDirection + ", que se ingresará en la sección: " + photoAlbum)
            
//             photoUploaded = new photos(photoName, photoSize, photoDirection, photoAlbum);
//         }
//         photosSaved.push(photoUploaded);
//         console.log(photosSaved)
//         break
//     }
// }





