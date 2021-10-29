export function device () {
    let d = window.navigator.platform;
    //d= "win32";
    
     switch (d) {
       case "Linux armv7l":
       case "Linux armv8l":
       case "iPhone":
       case "iPad":
        d = "movil";
         break;
       case "win32":
        d = "escritorio";
         //plataforma = "movil";
         break;
       default:
        d = "escritorio";
         //plataforma = "movil";
         break;
     }         
     return d;     
   }


