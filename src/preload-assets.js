//module.exports =
function preloadAudios(array, audios ) {  
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

//module.exports = 
function getUrl  (array, id) {
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

  //module.exports = 
  function renderAudio(url) {
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


