/*
alert("¡Hola! En esta sección podrás subir fotos a tu portafolio :)")

while (true) {
    let photosToUpload = parseInt(prompt("¿Cuántas fotos desea subir? \n(Cantidad máxima actual de 5 por operación.)"))

    if (isNaN(photosToUpload)) {
        alert("Recuerda que sólo puedes agregar números")
    } else if (photosToUpload > 5) {
        alert("Recuerda que sólo puedes agregar hasta 5 fotos.")
    } else {

        for (let photos = 0; photos < photosToUpload; photos++) {

            let photoName = prompt("Ingrese el nombre que tendrá la foto.")
            let photoSize;
            let photoDirection;
            let photoAlbum;

            while (true) {

                photoSize = parseInt(prompt("Ingrese el tamaño total de la foto en KB (sólo agregar números)"))
                if (isNaN(photoSize)) {
                    alert("El tamaño de la imagen solo permite números enteros")
                } else {
                    break
                }
            }

            while (true) {

                photoDirection = prompt("¿La foto es Vertical u Horizontal?")
                if ((photoDirection == "horizontal") || (photoDirection == "Horizontal") || (photoDirection == "HORIZONTAL") || (photoDirection == "vertical") || (photoDirection == "Vertical") || (photoDirection == "VERTICAL")) {
                    break;
                } else {
                    alert("Escriba solo una de las dos opciones disponibles: horizontal o vertical")
                }
            }

            while (true) {
                photoAlbum = prompt("Ingrese la sección en donde se alojará la foto. \nEscriba sólo Portafolio o Proyectos")

                if ((photoAlbum == "portafolio") || (photoAlbum == "Portafolio") || (photoAlbum == "PORTAFOLIO") || (photoAlbum == "proyectos") || (photoAlbum == "Proyectos") || (photoAlbum == "PROYECTOS")) {
                    break;
                } else {
                    alert("Escriba solo una de las dos opciones disponibles: portafolio o proyectos")
                }
            }

            alert("Usted está por agregar la fotografía nombre: " + photoName + ", de " + photoSize + " KB, " + "en modo " + photoDirection + "\nQue se ingresará en la sección: " + photoAlbum)
        }
    }
    break
}
*/