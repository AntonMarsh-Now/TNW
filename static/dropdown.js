

  function toggleClass(){

    let menu = document.querySelector(".bottom ");
    menu.classList.toggle("toggleCls");
}

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("bottom").style.height = "28px";
     document.getElementById("logo").style.height = "50px";
     document.getElementById("").style.fontSize = "14px";

  } else {
     document.getElementById("bottom").style.height = "31px";
     document.getElementById("logo").style.height = "60px";
     document.getElementById("navitem").style.fontSize = "16.5px";
  }
}