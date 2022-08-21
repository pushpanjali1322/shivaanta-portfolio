$(function(){
    $("#costum-header").load("header.html");  
  });

  $(function(){
    $("#costum-footer").load("footer.html");  
  });

  function slideShowStart(x) {
    // alert(x.id);
    document.getElementById(x.id).setAttribute("data-bs-ride" , "carousel")
   
  }
  
  function slideShowEnd(x) {
    document.getElementById(x.id).setAttribute("data-bs-ride" , "false")
  }