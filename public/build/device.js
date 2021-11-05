export function device () {
    let d = window.navigator.platform;
    //d= "win32";
    
     switch (d) {
       case "Linux armv7l":
       case "Linux armv8l":
       case "iPhone":       
        d = "mobile";
         break;
       case "win32":
        d = "desktop";         
         break;
        case "iPad":
          d = "iPad"
          break;
       default:
        d = "desktop";         
         break;
     }         
     return d;     
   }


