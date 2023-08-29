document.addEventListener("DOMContentLoaded", function() {
    const popupButton = document.getElementById("popupButton");
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("closeButton");
  
    popupButton.addEventListener("click", function() {
      popup.style.display = "flex";
    });
  
    closeButton.addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
  