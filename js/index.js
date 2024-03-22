$(document).ready(function () {
  $(".toggle-hamburger").click(function () {
    $(".sidebar-main-wrapper").addClass("active");
  });
  $(".close-sidebar").click(function () {
    $(".sidebar-main-wrapper").removeClass("active");
  });
});

$(document).ready(function () {
  $(".submenu").hide();

  $(".main-accordion-menu > li").click(function () {
    $(".submenu").not($(this).find(".submenu")).slideUp();

    if (!$(this).find(".submenu").is(":visible")) {
      $(this).find(".submenu").slideDown();
    }
  });
});



$(document).ready(function () {
  $(".size-selection").click(function () {
    $(".size-selection").removeClass("selected");
    $(this).addClass("selected");
    var selectedSize = $(this).text();
    $(".memory-size span").text(selectedSize);
  });
});




$(document).ready(function () {
  $(".color-selection").click(function () {
    $(".color-selection").removeClass("selected-color");
    $(this).addClass("selected-color");
    var selectedColor = $(this).text();
    $(".color-selected span").text(selectedColor);
  });
});

// #################################################
// ####          Home Slider                    ####
// ##################################################

$(document).ready(function () {
  $(".main-slider")
    .on("mouseenter", function () {
      if ($(window).width() > 1024) {
        $(this).find("button").fadeIn();
      }
    })
    .on("mouseleave", function () {
      $(this).find("button").fadeOut();
    });



  $(".main-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    // dots: true,
    items: 1,
    navText: [
      "<i class='fas icon-l fa-chevron-left'></i>",
      "<i class='fas icon-r fa-chevron-right'></i>",
    ],
    animateOut: false, // Disable slide out animation
    animateIn: false, // Disable slide in animation
    responsive: {
      0: {
        nav: false, // Hide navigation buttons below 768px
        dots: true,
      },
      768: {
        nav: true,
        dots: true,
      },
    },
  });
});

$(".new-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  navText: false,
  responsive: {
    0: {
      items: 2,
    },
    500: {
      items: 3,
    },
    600: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 7,
    },
  },
});




// #################################################
// ####          Toast js                   ####
// ##################################################


document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  var toast = document.getElementById('toast');

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var productId = this.id.replace('add-to-cart-btn-product1', '');

      toast.classList.add('show'); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove('show'); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.querySelectorAll('.add-to-cart');
  var toast = document.getElementById('toast');

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var productId = this.id.replace('add-to-cart-btn-product2', '');

      toast.classList.add('show'); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove('show'); // Remove class to hide toast
      }, 2000);
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.querySelectorAll('.add-to-cart-shop');
  var toast = document.getElementById('toast');

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var productId = this.id.replace('add-to-cart-btn-product3', '');

      toast.classList.add('show'); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove('show'); // Remove class to hide toast
      }, 2000);
    });
  });
});


// #################################################
// ####      Quick vies items increment decrement   ####
// ##################################################



$(document).ready(function () {
  $('.quick-minus-btn').click(function () {
    var currentValue = parseInt($(this).next('.quick-field').text());
    if (currentValue > 1) {
      $(this).next('.quick-field').text(currentValue - 1);
    }
  });

  $('.quick-plus-btn').click(function () {
    var currentValue = parseInt($(this).prev('.quick-field').text());
    $(this).prev('.quick-field').text(currentValue + 1);
  });
});


// Products details page video pause 


document.addEventListener('DOMContentLoaded', function () {
  const thumbnailSlider = document.getElementById('thumbnail-slider');
  const mainSlider = document.getElementById('main-slider');
  const video = document.querySelector('#main-slider video');

  // Pause video function
  function pauseVideo() {
    if (!video.paused) {
      video.pause();
    }
  }
  // Listen for "click" event on thumbnail slider
  thumbnailSlider.addEventListener('click', pauseVideo);

  // Listen for "transitionend" event on main slider
  mainSlider.addEventListener('transitionend', pauseVideo);
});


// Home page  video pause















// #################################################
// ####     Shop js code   ####
// ##################################################



$(document).ready(function () {
  $('.shop-size').click(function () {
    $('.shop-size').removeClass('selected'); // Remove the 'selected' class from all color options
    $(this).addClass('selected'); // Add the 'selected' class to the clicked color option
  });
});

$(document).ready(function () {
  $(".ratting-shop-c label").click(function () {
    var checkbox = $(this).find("input[type='checkbox']");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
});
$(document).ready(function () {
  $(".category-shop label").click(function () {
    var checkbox = $(this).find("input[type='checkbox']");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
});
$(document).ready(function () {
  $(".availability-shop label").click(function () {
    var checkbox = $(this).find("input[type='checkbox']");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
});





















const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
})
menuTrigger.addEventListener("click", () => {
  toggleMenu();
})
closeMenu.addEventListener("click", () => {
  toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
})
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }

  }
}

