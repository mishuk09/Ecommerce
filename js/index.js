$(document).ready(function () {
  $(".toggle-hamburger").click(function () {
    $(".sidebar-main-wrapper").addClass("active");
  });
  $(".close-sidebar").click(function () {
    $(".sidebar-main-wrapper").removeClass("active");
  });
});


// #################################################
// ####          Home Slider                    ####
// ##################################################


$(document).ready(function () {
  $('.main-slider').on('mouseenter', function () {
    if ($(window).width() > 768) {
      $(this).find('button').fadeIn();
    }
  }).on('mouseleave', function () {
    $(this).find('button').fadeOut();
  });

  $('.main-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // dots: true,
    items: 1,
    navText: [
      "<i class='fas icon-l fa-chevron-left'></i>",
      "<i class='fas icon-r fa-chevron-right'></i>"
    ],
    animateOut: false, // Disable slide out animation
    animateIn: false, // Disable slide in animation
    responsive: {
      0: {
        nav: false, // Hide navigation buttons below 768px
        dots: true
      },
      768: {
        nav: true,
        dots: true
      }
    }
  });
});


$('.new-carousel').owlCarousel({
  loop: true,
  // margin: 10,
  nav: false,
  dots: false,

  navText: false,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
})


// #################################################
// ####          GO TO TOP js                   ####
// ##################################################

document.addEventListener("DOMContentLoaded", function () {
  const goToTopButton = document.getElementById("goToTopButton");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      goToTopButton.classList.add("show");
    } else {
      goToTopButton.classList.remove("show");
    }
  });

  // Smooth scroll to top
  goToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});





