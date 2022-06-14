/*
alert("¡Hola! En esta sección podrás subir fotos a tu portafolio :)");

let photosToUpload = 0;
let photoName = "";
let photoSize = 0;
let photoDirection = "";
let photoAlbum = "";



function validateSize(size) {
        if (isNaN(size)) { 
            alert("El tamaño de la imagen solo permite números enteros")
            return true
        } else {return false}
}

function validateDirection(direction) {
        if ((direction == "horizontal") || (direction == "vertical")) {
            return false
        } else {
            alert("Escriba solo una de las dos opciones disponibles: horizontal o vertical");
            return true}
}

function validateAlbum(album) {
        if ((album == "portafolio") || (album == "proyectos")) {
            return false
        } else {
            alert("Escriba solo una de las dos opciones disponibles: Portafolio o Proyectos")
            return false}
}


while (true){

    photosToUpload = prompt("¿Cuántas fotos desea subir? \n(Cantidad máxima actual de 5 por operación.)");
    if (isNaN(photosToUpload)) {
        alert("Recuerda que sólo puedes agregar números")
    } else if (photosToUpload > 5) {
        alert("Recuerda que sólo puedes agregar hasta 5 fotos.")
    } else {

        for (let photo = 0; photo < photosToUpload; photo++) {

            photoName = (prompt("Ingrese el nombre que tendrá la foto."));
            
            let photoSizeIsValid = true;
            while (photoSizeIsValid) {
                photoSize = parseInt(prompt("Ingrese el tamaño total de la foto en KB (sólo agregar números)"));
                photoSizeIsValid = validateSize(photoSize);
            }
            
            let photoDirectionIsValid = true
            while (photoDirectionIsValid) {
                photoDirection = prompt("¿La foto es Vertical u Horizontal?").toLowerCase();
                photoDirectionIsValid = validateDirection(photoDirection)
            }

            let photoAlbumIsValid = true
            while (photoAlbumIsValid) {
                photoAlbum = prompt("Seleccione la sección en donde se alojará la foto.\nPortafolio. \nProyectos.").toLowerCase();
                photoAlbumIsValid = validateAlbum(photoAlbum);
            }

            alert("Usted está por agregar la fotografía nombre: " + photoName + ", de " + photoSize + "KB, " + "en modo " + photoDirection + ", que se ingresará en la sección: " + photoAlbum)
        }
        break
    }
}
*/