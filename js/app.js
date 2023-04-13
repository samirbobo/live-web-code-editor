let htmlCode = document.getElementById("htmlCode");
let cssCode = document.getElementById("cssCode");
let jsCode = document.getElementById("jsCode")
var frame = document.getElementById("preview-window").contentWindow.document;

htmlCode.value = "<div>\n\n</div>";
cssCode.value = "<style>\n\n</style>";
jsCode.value = "<script>\n\n</script>";


function showPreview() {
  var html = htmlCode.value;
  var css = "" + cssCode.value + "";
  var js = "" + jsCode.value + "";
  let arr = [];
  arr.push(html);
  arr.push(css);
  arr.push(js);
  localStorage.setItem("saveHtml", html);
  localStorage.setItem("saveCss", css);
  localStorage.setItem("saveJs", js);
  localStorage.setItem("saveCode", arr.join(""));
  frame.open();
  frame.write(html + css + js);
  frame.close();
}

function show(x) {
  document.getElementById("html").style.display = "none";
  document.getElementById("css").style.display = "none";
  document.getElementById("js").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById(x).style.display = "block";
}

function show_all() {
  if (window.innerWidth >= 992) {
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "block";
    document.getElementById("js").style.display = "block";
    document.getElementById("result").style.display = "block";
  }
  if (
    window.innerWidth < 992 &&
    document.getElementById("html").style.display == "block"
  ) {
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("result").style.display = "none";
  }
}

window.addEventListener('DOMContentLoaded', _ => {
  if(localStorage.getItem("saveCode")) {
    frame.open();
    frame.write(localStorage.getItem("saveCode"));
    frame.close();
    htmlCode.value = localStorage.getItem("saveHtml")
    cssCode.value = localStorage.getItem("saveCss")
    jsCode.value = localStorage.getItem("saveJs")
  }
})