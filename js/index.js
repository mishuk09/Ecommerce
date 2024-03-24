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

document.addEventListener('DOMContentLoaded', function () {
  var addToCartButtons = document.querySelectorAll('.add-to-cart-profile');
  var toast = document.getElementById('toast');

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      var productId = this.id.replace('add-to-cart-btn-product4', '');

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





// #################################################
// ####     profile js code   ####
// ##################################################




$(document).ready(function () {
  $('.tab-links a').on('click', function (e) {
    var currentAttrValue = $(this).attr('href');

    // Show/Hide Tabs
    $('.tab-content-2 ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });
});



$(document).ready(function () {
  $('.info-idit').click(function () {
    var editBtn = $(this);
    var firstNameInput = $('#firstName');
    var lastNameInput = $('#lastName');
    var saveBtn = $('#saveBtn');
    var cancelBtn = $('#cancelBtn');

    if (editBtn.text() === 'Edit') {
      editBtn.text('Cancel');
      firstNameInput.prop('disabled', false);
      lastNameInput.prop('disabled', false);
      saveBtn.removeClass('invisible');
      cancelBtn.removeClass('invisible');
    } else {
      editBtn.text('Edit');
      firstNameInput.prop('disabled', true);
      lastNameInput.prop('disabled', true);
      saveBtn.addClass('invisible');
      cancelBtn.addClass('invisible');
    }
  });
});


$(document).ready(function () {
  $('.info-idit2').click(function () {
    var editBtn = $(this);
    var emailInput = $('#email');
    var saveBtn = $('#saveBtnEmail');
    var cancelBtn = $('#cancelBtnEmail');

    if (editBtn.text() === 'Edit') {
      editBtn.text('Cancel');
      emailInput.prop('disabled', false);
      saveBtn.removeClass('invisible');
      cancelBtn.removeClass('invisible');
    } else {
      editBtn.text('Edit');
      emailInput.prop('disabled', true);
      saveBtn.addClass('invisible');
      cancelBtn.addClass('invisible');
    }
  });
});



$(document).ready(function () {
  $('.info-idit3').click(function () {
    var editBtn = $(this);
    var mobileInput = $('#mobile');
    var saveBtn = $('#saveBtnMobile');
    var cancelBtn = $('#cancelBtnMobile');

    if (editBtn.text() === 'Edit') {
      editBtn.text('Cancel');
      mobileInput.prop('disabled', false);
      saveBtn.removeClass('invisible');
      cancelBtn.removeClass('invisible');
    } else {
      editBtn.text('Edit');
      mobileInput.prop('disabled', true);
      saveBtn.addClass('invisible');
      cancelBtn.addClass('invisible');
    }
  });
});



$(document).ready(function () {
  $('.info-idit4').click(function () {
    var editBtn = $(this);
    var newPasswordInput = $('#newPassword');
    var confirmPasswordInput = $('#confirmPassword');
    var saveBtn = $('#saveBtnPass');
    var cancelBtn = $('#cancelBtnPass');

    if (editBtn.text() === 'Edit') {
      editBtn.text('Cancel');
      newPasswordInput.prop('disabled', false);
      confirmPasswordInput.prop('disabled', false);
      saveBtn.removeClass('invisible');
      cancelBtn.removeClass('invisible');
    } else {
      editBtn.text('Edit');
      newPasswordInput.prop('disabled', true);
      confirmPasswordInput.prop('disabled', true);
      saveBtn.addClass('invisible');
      cancelBtn.addClass('invisible');
    }
  });
});





// Wishlist   




$(document).ready(function () {
  // Add click event listener to all elements with class 'add-to-cart'
  $('.add-to-cart').click(function (e) {
    e.preventDefault(); // Prevent default behavior of anchor tag
    // Remove the parent container of the clicked element
    $(this).closest('.parent-divv').remove();
  });
});




$(document).ready(function () {
  // Initial count of child div elements within the parent div with class 'wishlist-dic-sount'
  var initialCount = $('.wishlist-dic-sount').children('div').length;
  $('.wishlist-span').text(initialCount); // Set initial count

  // Function to update the count
  function updateCount() {
    var childCount = $('.wishlist-dic-sount').children('div').length;
    $('.wishlist-span').text(childCount);
  }

  // Update count when page loads

  // Update count when a child div is removed
  $('.wishlist-dic-sount').on('click', 'div', function () {
    $(this).remove(); // Remove the clicked child div
    updateCount(); // Update the count
  });
});









$(document).ready(function () {
  $(".profile-box label").click(function () {
    var checkbox = $(this).find("input[type='checkbox']");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
});
$(document).ready(function () {
  $(".profile-box-2 label").click(function () {
    var checkbox = $(this).find("input[type='checkbox']");
    checkbox.prop("checked", !checkbox.prop("checked"));
  });
});