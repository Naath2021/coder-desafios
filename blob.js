const fileInput = document.querySelector("#imgInput");
const saveToBase64 = document.querySelector("#saveToB64");
const convertToBlob = document.querySelector("#convertToBlob");
const showB64Img = document.querySelector("#showB64Img");
const b64Container = document.querySelector("#b64Container");

saveToBase64.addEventListener("click", async (e) => {
    console.log(saveToBase64.innerText);
    console.log("Cargando...")
    const myBlob = fileInput.files[0];
    const myB64 = await blobToBase64(myBlob);
    console.log(myB64)
    let img = document.createElement("img")
    img.src = `data:image/png;base64,${myB64} `
    img.width = 200;
    b64Container.append(img);
    //b64Container.innerHTML = `<img src="${myB64}">`
    // b64Container.innerHTML += `<img src=data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==">`
    // return myB64;
});


const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            resolve(reader.result.split(',')[1]);
        };
    });
};

//   showB64Img.addEventListener("click", () => {
//     console.log("inicios")
//     console.log(b64Code)
//     console.log("Agregado")
//   })

// const b64ToBlob = async(b64, type) => {
//     const blob = await fetch(`data:${type};base64, ${b64}`);
//     return blob;
// };

