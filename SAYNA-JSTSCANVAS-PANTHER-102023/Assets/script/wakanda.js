$(document).ready(function() {
  const titre1 = document.getElementById("titre1");
  const titre2 = document.getElementById("titre2");


  titre1.addEventListener("mouseover", zoomerTitres);
  titre1.addEventListener("mouseout", dezoomerTitres);

  titre2.addEventListener("mouseover", zoomerTitres);
  titre2.addEventListener("mouseout", dezoomerTitres);

  function zoomerTitres() {
  titre1.style.transform = "scale(1.2)";
  titre2.style.transform = "scale(1.2)";
  }

  function dezoomerTitres() {
  titre1.style.transform = "scale(1)";
  titre2.style.transform = "scale(1)";
  }

  function isElementInViewport(element) {
    let rect = element.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
  function handleScroll() {
    let elements = document.querySelectorAll('.fade-in');
    for (let element of elements) {
      if (isElementInViewport(element)) {
        element.classList.add('visible');
      }
    }
  }
  window.addEventListener('scroll', handleScroll);


  $(".zoomable").on("mouseenter", function() {
    $(this).addClass("zoomed");
  });

  $(".zoomable").on("mouseleave", function() {
    $(this).removeClass("zoomed");
  });

});