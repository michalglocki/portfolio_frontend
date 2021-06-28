export const setCookie = (language) => {
  let date = new Date();
  date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = "language=" + language + ";" + expires + ";path=/";
};

export function getCookie() {
  let name = "language=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookiesList = decodedCookie.split(";");
  for (let i = 0; i < cookiesList.length; i++) {
    let singleValue = cookiesList[i];
    while (singleValue.charAt(0) === " ") {
      singleValue.substring(1);
    }
    if (singleValue.indexOf(name) === 0) {
      return singleValue.substring(name.length, singleValue.length);
    }
  }
  return "";
}
