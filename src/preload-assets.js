module.exports = function preloadAudios(array, audios ) {  
  let itemAudio;

  array.forEach((element) => {
    // console.log(element.url_audio);
    //console.log(typeof(element.url_audio));

    if (element.url_audio) {
      const audio = new Audio(element.url_audio);
      itemAudio = {
        id: element.id,
        audio,
      };
      audios.push(itemAudio);
    }
  });  
};

module.exports = function getUrl  (array, id) {
    console.log("id", id);
    let tmpUrl=null;

    array.forEach((element) => {
      if (element.id == id) {
          console.log( "URL", element.audio.src);
          tmpUrl = element.audio.src;          
      } 
    });
    return tmpUrl;
  };

module.exports = function renderAudio(url) {
  const visor = document.getElementById("visor");
  if (url) {
    visor.innerHTML = `
              <audio  controls /> 
                  <source src= ${url}  type= "audio/mp3">
              </audio>
              `;
  } else {
    visor.innerHTML = `
              <img src="./assets/img/no_audio.png" alt="no audio" />
              `;
  }
};

module.exports = function  preloadImages (array, images, urlNoImage) {
  /*
  images: empty array
  url: path image url 
  id: record id
  urlNoImage: path no image.jpg
   */
  let image;
  array.forEach((element) => {
    image = {
      id: element.id,
      img: new Image(),
    };
    //caraga de la url de la img
    image.img.src = element.url_imagen;

    //handle fallback para las imagenes no encontradas
    image.img.onerror = function () {
      handleErrorImage(this, element.id, images, urlNoImage);
    };
    images.push(image);
    console.log("Imagen cargada de ", element.url_imagen);
  });
  return true;
};

module.exports = function getImage (images, id) {
  let tmpUrl = null;
  //console.log("id---->", id);
  //console.log("images----->", images);
  images.forEach((item) => {
    //console.log(item);
    if (item.id === id) {
      tmpUrl = item.img.src;
    }
  });
  return tmpUrl;
};