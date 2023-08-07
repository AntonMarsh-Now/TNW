

  function toggleClass(){

    let menu = document.querySelector(".bottom ");
    menu.classList.toggle("toggleCls");
}

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("bottom").style.height = "30px";
     document.getElementById("logo").style.height = "50px";
  } else {
     document.getElementById("bottom").style.height = "40px";
     document.getElementById("logo").style.height = "60px";
  }
}