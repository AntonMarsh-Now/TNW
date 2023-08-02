function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById(".logo").style.Height = "30px";
      document.getElementById(".bottom").style.height = "25px";
    } else {
      document.getElementById(".navbar").style.height= "80px 10px";
      document.getElementById(".bottom").style.height = "35px";
    }
  }