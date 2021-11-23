//fuente: https://www.geeksforgeeks.org/detect-the-operating-system-of-user-using-javascript/
export default function _platform() {
  let p = null;
  if (navigator.userAgent.indexOf("Win") != -1) {
    p = "win";
  }
  if (navigator.userAgent.indexOf("Mac") != -1) {
    p = "mac";
  }
  if (navigator.userAgent.indexOf("Linux") != -1) {
    p = "linux";
  }
  if (navigator.userAgent.indexOf("Android") != -1) {
    p = "android";
  }
  if (navigator.userAgent.indexOf("like Mac") != -1) {
    p = "ios";
  }

  return p;
}
