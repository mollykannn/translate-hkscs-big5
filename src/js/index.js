import "../css/style.scss";
import ClipboardJS from "clipboard";
import Big5Text from "./translate-hkscs-big5.js";

const clipboardButton = new ClipboardJS(".column--copyButton");
clipboardButton.on("success", function (e) {
  e.clearSelection();
});

window.clearContent = function () {
  document.getElementById("textOutput").value = "";
};

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
