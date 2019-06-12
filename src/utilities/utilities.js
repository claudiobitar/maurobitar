export const noMoreLonelyWords = (selector, numWords) => {
  var elems = document.querySelectorAll(selector);
  var i;
  for (i = 0; i < elems.length; ++i) {
    var textArray = elems[i].innerText.split(" ");
    var lastWords = textArray.splice(-numWords, numWords).join("&nbsp;");
    var textMinusLastWords = textArray.join(" ");
    elems[i].innerHTML = textMinusLastWords + " " + lastWords;
  }  
}


