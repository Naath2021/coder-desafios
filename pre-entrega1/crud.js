// CRUD STANDS FOR CREATE, READ, UPDATE AND DELETE //

const photosSaved = [];

class photos {
  constructor(name, size, direction, album) {
    this.name = name;
    this.size = size;
    this.direction = direction;
    this.album = album;
  }
}

let conditionToFirstWhile = true;
while (conditionToFirstWhile) {
  const crudActions = prompt(
    "¡Hola! \nEn esta sección podrás: \n1) Agregar fotos. \n2) Buscar fotos. \n3) Editar fotos \n4) Borrar fotos. \n5) Salir. \n¿Qué deseas hacer?"
  );

  if (isNaN(crudActions)) {
    alert("Sólo puedes agregar números.");
  } else if (crudActions > 5 || crudActions < 0) {
    alert("Sólo puedes agregar un numero entre el 1 y el 4");
  }

  switch (crudActions) {
    case "1":
        createPhoto();
      break;
    case "2":
        if (photosSaved.length > 0) {
            searchPhoto()
        } else {alert("Tu lista está vacía.")}
      alert(photosSaved);
      break;
    case "3":
      alert("editar");
      break;
    case "4":
      alert("borrar");
      break;
    case "5":
      conditionToFirstWhile = false;
      break;
    default:
      break;
  }
}



            // Validation functions
function validateSize(size) {
  if (isNaN(size)) {
    alert("El tamaño de la imagen solo permite números enteros");
    return true;
  } else {
    return false;
  }
}

function validateDirection(direction) {
  if (direction === "horizontal" || direction === "vertical") {
    return false;
  } else {
    alert(
      "Escribe solo una de las dos opciones disponibles: horizontal o vertical"
    );
    return true;
  }
}

function validateAlbum(album) {
  if (album === "portafolio" || album === "proyectos") {
    return false;
  } else {
    alert(
      "Escribe solo una de las dos opciones disponibles: Portafolio o Proyectos"
    );
    return true;
  }
}

            // Switch functions
function createPhoto() {
  let photoUploaded;
  let conditionToWhileCreate = true;
  while (conditionToWhileCreate) {
    let photosToUpload = prompt(
      "¿Cuántas fotos deseas subir? \n(Cantidad máxima actual de 5 por operación.)"
    );
    if (isNaN(photosToUpload)) {
      alert("Recuerda que sólo puedes agregar números");
    } else if (photosToUpload > 5) {
      alert("Recuerda que sólo puedes agregar hasta 5 fotos.");
    } else {
      for (let photo = 0; photo < photosToUpload; photo++) {
        let photoName = prompt("Ingresa el nombre que tendrá la foto.");
        let photoSize = 0;
        let photoDirection = "";
        let photoAlbum = "";

        let photoSizeIsValid = true;
        while (photoSizeIsValid) {
          photoSize = parseInt(
            prompt(
              "Ingresa el tamaño total de la foto en KB (Agrega sólo números)"
            )
          );
          photoSizeIsValid = validateSize(photoSize);
        }

        let photoDirectionIsValid = true;
        while (photoDirectionIsValid) {
          photoDirection = prompt(
            "¿La foto es Vertical u Horizontal?"
          ).toLowerCase();
          photoDirectionIsValid = validateDirection(photoDirection);
        }

        let photoAlbumIsValid = true;
        while (photoAlbumIsValid) {
          photoAlbum = prompt(
            "Selecciona la sección en donde se alojará la foto.\n- Portafolio. \n- Proyectos."
          ).toLowerCase();
          photoAlbumIsValid = validateAlbum(photoAlbum);
        }

        alert(
          "Estás por agregar la fotografía nombre: " +
            photoName +
            ", de " +
            photoSize +
            "KB, en modo " +
            photoDirection +
            ", que se ingresará en la sección: " +
            photoAlbum
        );

        photoUploaded = new photos(photoName,photoSize,photoDirection,photoAlbum);
      }
      photosSaved.push(photoUploaded);
      console.log(photoUploaded);
    }
    conditionToWhileCreate = false;
  }
}


function searchPhoto() {
    let searchName = photosSaved.find(item => item.name === "maria")
    alert(searchName.name)
}