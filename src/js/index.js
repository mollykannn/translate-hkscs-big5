import Big5Text from "./translate-hkscs-big5.js";

window.convertBig5 = function () {
  let curDoc = document.getElementById("textOutput");
  let data = curDoc.value.split("");
  data = data.map(element => {
    if(Big5Text[element]) {
      element = Big5Text[element];
    }
    return element; 
  });
  curDoc.value = data.join("");
}
