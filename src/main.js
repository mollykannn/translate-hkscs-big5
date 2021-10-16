import '/src/css/style.scss'
import Big5Text from "/src/js/translate-hkscs-big5.js";
import { registerSW } from 'virtual:pwa-register'

const updateSW = registerSW({
  onNeedRefresh () {},
  onOfflineReady () {}
})

updateSW()

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
