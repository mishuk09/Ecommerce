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

// $(".new-carousel").owlCarousel({
//   loop: true,
//   margin: 20,
//   nav: false,
//   dots: false,
//   navText: false,
//   responsive: {
//     0: {
//       items: 2,
//     },
//     500: {
//       items: 3,
//     },
//     600: {
//       items: 3,
//     },
//     800: {
//       items: 4,
//     },
//     1000: {
//       items: 7,
//     },
//   },
// });

$(document).ready(function () {
  $(".new-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    navText: [
      "<i class='fas icon-prev fa-chevron-left'></i>",
      "<i class='fas icon-next fa-chevron-right'></i>",
    ],
    dots: false,
    responsive: {
      0: {
        nav: false, // Hide navigation buttons below 768px
        dots: true,
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
});

// #################################################
// ####          Toast js                   ####
// ##################################################

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  var toast = document.getElementById("toast");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product1", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart-w");
  var toast = document.getElementById("toast");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product2", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart");
  var toast = document.getElementById("toast-two");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product4", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart-shop");
  var toast = document.getElementById("toast ");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product3", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart-shop-cart");
  var toast = document.getElementById("toast");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product-cart", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart-shop-w");
  var toast = document.getElementById("toast-two");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product7", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart-profile");
  var toast = document.getElementById("toast");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product4", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

// feature of product section

document.addEventListener("DOMContentLoaded", function () {
  var addToCartButtons = document.querySelectorAll(".add-to-cart");
  var toast = document.getElementById("toast");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      var productId = this.id.replace("add-to-cart-btn-product6", "");

      toast.classList.add("show"); // Add class to show toast

      setTimeout(function () {
        toast.classList.remove("show"); // Remove class to hide toast
      }, 2000);
    });
  });
});

// #################################################
// ####      Quick vies items increment decrement   ####
// ##################################################

$(document).ready(function () {
  $(".quick-minus-btn").click(function () {
    var currentValue = parseInt($(this).next(".quick-field").text());
    if (currentValue > 1) {
      $(this)
        .next(".quick-field")
        .text(currentValue - 1);
    }
  });

  $(".quick-plus-btn").click(function () {
    var currentValue = parseInt($(this).prev(".quick-field").text());
    $(this)
      .prev(".quick-field")
      .text(currentValue + 1);
  });
});

// Products details page video pause

// document.addEventListener('DOMContentLoaded', function () {
//   const thumbnailSlider = document.getElementById('thumbnail-slider');
//   const mainSlider = document.getElementById('main-slider');
//   const video = document.querySelector('#main-slider video');

//   // Pause video function
//   function pauseVideo() {
//     if (!video.paused) {
//       video.pause();
//     }
//   }

//   thumbnailSlider.addEventListener('click', pauseVideo);
//   mainSlider.addEventListener('transitionend', pauseVideo);
// });

// #################################################
// ####     Shop js code   ####
// ##################################################

$(document).ready(function () {
  $(".shop-size").click(function () {
    $(".shop-size").removeClass("selected"); // Remove the 'selected' class from all color options
    $(this).addClass("selected"); // Add the 'selected' class to the clicked color option
  });
});

// $(document).ready(function () {
//   $(".ratting-shop-c label").click(function () {
//     var checkbox = $(this).find("input[type='checkbox']");
//     checkbox.prop("checked", !checkbox.prop("checked"));
//   });
// });
// $(document).ready(function () {
//   $(".category-shop label").click(function () {
//     var checkbox = $(this).find("input[type='checkbox']");
//     checkbox.prop("checked", !checkbox.prop("checked"));
//   });
// });
// $(document).ready(function () {
//   $(".availability-shop label").click(function () {
//     var checkbox = $(this).find("input[type='checkbox']");
//     checkbox.prop("checked", !checkbox.prop("checked"));
//   });
// });

// #################################################
// ####     profile js code   ####
// ##################################################

$(document).ready(function () {
  $(".tab-links a").on("click", function (e) {
    var currentAttrValue = $(this).attr("href");

    // Show/Hide Tabs
    $(".tab-content-2 " + currentAttrValue)
      .show()
      .siblings()
      .hide();

    // Change/remove current tab to active
    $(this).addClass("active").siblings().removeClass("active");

    e.preventDefault();
  });
});

// $(document).ready(function () {
//   $("#Edit-button").click(function () {
//     var editBtn = $(this);
//     var firstNameInput = $("#firstName");
//     var lastNameInput = $("#lastName");
//     var saveBtn = $("#saveBtn");
//     var cancelBtn = $("#Cancel-button");

//     firstNameInput.prop("disabled", false);
//     lastNameInput.prop("disabled", false);

//     saveBtn.removeClass("invisible");
//     editBtn.addClass("invisible");
//     cancelBtn.removeClass("invisible");
//     cancelBtn.addClass("visible");
//   });
//   $("#Cancel-button").click(function () {
//     var cancelBtn = $(this);
//     var editBtn = $("#Edit-button");
//     var firstNameInput = $("#firstName");
//     var lastNameInput = $("#lastName");
//     var saveBtn = $("#saveBtn");
//     var cancelBtn = $("#Cancel-button");
//     firstNameInput.prop("disabled", false);
//     lastNameInput.prop("disabled", false);
//     saveBtn.addClass("invisible");
//     editBtn.removeClass("invisible");
//     editBtn.addClass("visible");
//     cancelBtn.removeClass("visible");
//     cancelBtn.addClass("invisible");
//   });
// });

// $(document).ready(function () {
//   $(".info-idit2").click(function () {
//     var editBtn = $(this);
//     var emailInput = $("#email");
//     var saveBtn = $("#saveBtnEmail");
//     var cancelBtn = $("#cancelBtnEmail");

//     if (editBtn.text() === "Edit") {
//       editBtn.text("Cancel");
//       emailInput.prop("disabled", false);
//       saveBtn.removeClass("invisible");
//       cancelBtn.removeClass("invisible");
//     } else {
//       editBtn.text("Edit");
//       emailInput.prop("disabled", true);
//       saveBtn.addClass("invisible");
//       cancelBtn.addClass("invisible");
//     }
//   });
// });

// $(document).ready(function () {
//   $(".info-idit3").click(function () {
//     var editBtn = $(this);
//     var mobileInput = $("#mobile");
//     var saveBtn = $("#saveBtnMobile");
//     var cancelBtn = $("#cancelBtnMobile");

//     if (editBtn.text() === "Edit") {
//       editBtn.text("Cancel");
//       mobileInput.prop("disabled", false);
//       saveBtn.removeClass("invisible");
//       cancelBtn.removeClass("invisible");
//     } else {
//       editBtn.text("Edit");
//       mobileInput.prop("disabled", true);
//       saveBtn.addClass("invisible");
//       cancelBtn.addClass("invisible");
//     }
//   });
// });

// $(document).ready(function () {
//   $(".info-idit4").click(function () {
//     var editBtn = $(this);
//     var newPasswordInput = $("#newPassword");
//     var confirmPasswordInput = $("#confirmPassword");
//     var saveBtn = $("#saveBtnPass");
//     var cancelBtn = $("#cancelBtnPass");

//     if (editBtn.text() === "Edit") {
//       editBtn.text("Cancel");
//       newPasswordInput.prop("disabled", false);
//       confirmPasswordInput.prop("disabled", false);
//       saveBtn.removeClass("invisible");
//       cancelBtn.removeClass("invisible");
//     } else {
//       editBtn.text("Edit");
//       newPasswordInput.prop("disabled", true);
//       confirmPasswordInput.prop("disabled", true);
//       saveBtn.addClass("invisible");
//       cancelBtn.addClass("invisible");
//     }
//   });
// });

// Wishlist

$(document).ready(function () {
  // Add click event listener to all elements with class 'add-to-cart'
  $(".add-to-cart-w").click(function (e) {
    e.preventDefault();
    $(this).closest(".parent-divv").remove();
  });
});

$(document).ready(function () {
  function updateCount() {
    var childCount = $(".parent-divv").children("a").length;
    $(".wishlist-span").text(childCount);
  }
  // Initial count update
  updateCount();
  $(".add-to-cart-w").click(function (event) {
    event.preventDefault();
    $(this).parents(".parent-divv").remove();
    updateCount();
  });
});

// $(document).ready(function () {
//   $(".profile-box label").click(function () {
//     var checkbox = $(this).find("input[type='checkbox']");
//     checkbox.prop("checked", !checkbox.prop("checked"));
//   });
// });

// $(document).ready(function () {
//   $(".profile-box-2 label").click(function () {
//     var checkbox = $(this).find("input[type='checkbox']");
//     checkbox.prop("checked", !checkbox.prop("checked"));
//   });

//   $(".profile-box-2 label input[type='checkbox'], .profile-box-2 label p").click(function (e) {
//     var checkbox = $(this).closest("label").find("input[type='checkbox']");
//     checkbox.prop("checked", !checkbox.prop("checked"));
//     e.stopPropagation(); // prevent event bubbling
//   });
// });

function countAnimation(element, target) {
  $({ countNum: $(element).text() }).animate(
    { countNum: target },
    {
      duration: 2000,
      easing: "linear",
      step: function () {
        $(element).text(Math.floor(this.countNum));
      },
      complete: function () {
        $(element).text(target);
      },
    }
  );
}

$(document).ready(function () {
  // Specify the target numbers and call countAnimation function
  countAnimation(".count-down:eq(0)", 56);
  countAnimation(".count-down:eq(1)", 9.6);
  countAnimation(".count-down:eq(2)", 13);
});

$(document).ready(function () {
  $(".editbtn1").click(function () {
    // Get existing data
    var name = $(".address-details p:nth-child(1)").text().trim();
    var address = $(".address-details p:nth-child(2)").text().trim();
    var email = $(".address-details p:nth-child(3)").text().trim();
    var phone = $(".address-details p:nth-child(4)")
      .text()
      .trim()
      .replace("Phone: ", "");

    // Populate form fields
    $('#editAddressForm input[name="name"]').val(name);
    $('#editAddressForm input[name="address"]').val(address);
    $('#editAddressForm input[name="email"]').val(email);
    $('#editAddressForm input[name="phone"]').val(phone);

    // Show the edit form
    $(".edit-form").show();
  });

  // Submit form
  $("#editAddressForm").submit(function (e) {
    e.preventDefault();
    var formData = $(this).serializeArray();

    // Update address details with new values
    $(".address-details p:nth-child(1)").text(formData[0].value);
    $(".address-details p:nth-child(2)").text(formData[1].value);
    $(".address-details p:nth-child(3)").text(formData[2].value);
    $(".address-details p:nth-child(4)").text("Phone: " + formData[3].value);

    // Hide the edit form
    $(".edit-form").hide();
  });
});

// shiping address

$(document).ready(function () {
  $(".editbtn-two").click(function () {
    // Get existing data
    var name = $(".shipping-address-details p:nth-child(1)").text().trim();
    var address = $(".shipping-address-details p:nth-child(2)").text().trim();
    var email = $(".shipping-address-details p:nth-child(3)").text().trim();
    var phone = $(".shipping-address-details p:nth-child(4)")
      .text()
      .trim()
      .replace("Phone: ", "");

    // Populate form fields
    $('#editShippingAddressForm input[name="name"]').val(name);
    $('#editShippingAddressForm input[name="address"]').val(address);
    $('#editShippingAddressForm input[name="email"]').val(email);
    $('#editShippingAddressForm input[name="phone"]').val(phone);

    // Show the edit form
    $(".edit-shipping-form").show();
  });

  // Submit form
  $("#editShippingAddressForm").submit(function (e) {
    e.preventDefault();
    // Get form data
    var formData = $(this).serializeArray();

    // Update shipping address details with new values
    $(".shipping-address-details p:nth-child(1)").text(formData[0].value);
    $(".shipping-address-details p:nth-child(2)").text(formData[1].value);
    $(".shipping-address-details p:nth-child(3)").text(formData[2].value);
    $(".shipping-address-details p:nth-child(4)").text(
      "Phone: " + formData[3].value
    );

    // Hide the edit form
    $(".edit-shipping-form").hide();
  });
});

// $(document).ready(function () {
//   $(".overlay-two").click(function (event) {
//     // Prevent clicks on the popup from closing it
//     event.stopPropagation();
//   });

//   $(document).click(function () {
//     // Hide the popup when user clicks outside of it
//     $(".overlay-two").hide();
//   });

//   $(".close").click(function () {
//     // Hide the popup when user clicks on the close button
//     $(".overlay-two").hide();
//   });
// });

// check out code

$(document).ready(function () {
  $("#btn-q-plus").click(function () {
    var currentValue = parseInt($("#case-number-field").val());
    $("#case-number-field").val(currentValue + 1);
    updateTotal();
  });

  $("#btn-q-minus").click(function () {
    var currentValue = parseInt($("#case-number-field").val());
    if (currentValue > 1) {
      $("#case-number-field").val(currentValue - 1);
      updateTotal();
    }
  });

  function updateTotal() {
    var quantity = parseInt($("#case-number-field").val());
    var pricePerItem = 350; // Assuming price per item is Rs 350
    var total = quantity * pricePerItem;
    $("#phone-total").text("Rs " + total);
    $("#subtotal-q").text("Rs " + total);
  }
});

// Track order  code

$(document).ready(function () {
  $("section .track-your-order button").on("click", function () {
    $(this).fadeOut();
    $("section .track-your-order").fadeOut();
  });
});

// $(document).ready(function () {
//   $('.faq-toggle').click(function () {
//     var faq = $(this).closest('.faq');
//     faq.toggleClass('active');
//     if ($(this).index() === 1) { // For the second toggle
//       if (!faq.hasClass('active')) {
//         faq.addClass('active');
//       }
//     }
//   });
// });

// $(document).ready(function () {
//   $('.con-t-sss').click(function () {
//     var name = $(this).closest('.faq-text').find('.name-ti').text().trim();
//     $('.main-name').text(name);
//     $(this).closest('.faq-text').toggle();
//   });

//   $('.faq-toggle').click(function () {
//     var faq = $(this).closest('.faq');
//     var faqText = faq.find('.faq-text');
//     faqText.toggle();
//   });
// });

// $(document).ready(function () {
//   // Hide all faq-text elements except the first one
//   $('.faq-text').not(':first').hide();

//   $('.con-t-sss').click(function () {
//     var name = $(this).prev().find('.name-ti').text().trim();
//     $('.main-name').text(name);
//     $(this).closest('.faq-text').toggle();
//   });

//   $('.faq-toggle').click(function () {
//     var faqText = $(this).siblings('.faq-text');
//     faqText.toggle();
//   });
// });

$(document).ready(function () {
  $(".product-remov").click(function () {
    $(this).closest(".faq-text-child").remove(); // Remove the closest parent element with the class 'faq'
  });
});

$(document).ready(function () {
  // Decrease quantity
  $(".decreaseQuantity").click(function () {
    var quantityElement = $(this).siblings(".quantity");
    var currentQuantity = parseInt(quantityElement.text());
    if (currentQuantity > 1) {
      quantityElement.text(currentQuantity - 1);
    }
  });

  // Increase quantity
  $(".increaseQuantity").click(function () {
    var quantityElement = $(this).siblings(".quantity");
    var currentQuantity = parseInt(quantityElement.text());
    quantityElement.text(currentQuantity + 1);
  });
});

$(document).ready(function () {
  // Open popup
  $("#open").click(function () {
    $("#overlay").fadeIn();
    $("#popup").fadeIn();
  });

  // Close popup when clicking the overlay
  $("#overlay").click(function () {
    $("#overlay").fadeOut();
    $("#popup").fadeOut();
  });

  // Prevent clicks on the popup from closing it
  $("#popup").click(function (event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the overlay
  });

  // Close popup
  $("#close").click(function () {
    $("#overlay").fadeOut();
    $("#popup").fadeOut();
  });
});

$(document).ready(function () {
  // Open popup
  $("#open2").click(function () {
    $("#overlay2").fadeIn();
    $("#popup2").fadeIn();
  });

  // Close popup when clicking the overlay
  $("#overlay2").click(function () {
    $("#overlay2").fadeOut();
    $("#popup2").fadeOut();
  });

  // Prevent clicks on the popup from closing it
  $("#popup2").click(function (event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the overlay
  });

  // Close popup
  $("#close2").click(function () {
    $("#overlay2").fadeOut();
    $("#popup2").fadeOut();
  });
});

$(document).ready(function () {
  // Open popup
  $("#open3").click(function () {
    $("#overlay3").fadeIn();
    $("#popup3").fadeIn();

    // Get the initial email value
    var initialEmail = $(".editable-text-value").text().trim();

    // Set the initial email value as the default value for the input field
    $('#popup3 input[type="text"]').val(initialEmail);
  });

  // Close popup when clicking the overlay
  $("#overlay3").click(function () {
    $("#overlay3").fadeOut();
    $("#popup3").fadeOut();
  });

  // Prevent clicks on the popup from closing it
  $("#popup3").click(function (event) {
    event.stopPropagation(); // Prevent the event from bubbling up to the overlay
  });

  // Close popup
  $(".email-c-b").click(function () {
    var newEmail = $('#popup3 input[type="text"]').val().trim();
    $(".editable-text-value").text(newEmail);
    $("#overlay3").fadeOut();
    $("#popup3").fadeOut();
  });
});

$(document).ready(function () {
  $(".checkbox").change(function () {
    $(".checkbox").not(this).prop("checked", false);
  });
});

$(document).ready(function () {
  $(".checkbox").change(function () {
    $(".checkbox").not(this).prop("checked", false);
  });
});

// $(document).ready(function () {
//   // Click event for Payment options
//   $('.payment-i').click(function () {
//     // Remove active class from all payment options
//     $('.payment-i').removeClass('active');
//     // Hide all forms
//     $('#creditCardForm, #cashOnDeliveryForm, #eSewaForm, #imePayForm').hide();

//     // Toggle active class for the clicked tab
//     $(this).addClass('active');

//     // Check which tab is active and show its corresponding form
//     if ($(this).find('.payment-gate').text() === "Credit/Debit Card") {
//       $('#creditCardForm').show();
//     } else if ($(this).find('.payment-gate').text() === "Cash On Delivery") {
//       $('#cashOnDeliveryForm').show();
//     } else if ($(this).find('.payment-gate').text() === "eSewa Mobile Wallet") {
//       $('#eSewaForm').show();
//     } else if ($(this).find('.payment-gate').text() === "IME Pay") {
//       $('#imePayForm').show();
//     }
//   });

//   // Form submission handling for Credit/Debit Card
//   $('#creditCardDetails').submit(function (event) {
//     // Prevent default form submission
//     event.preventDefault();
//     // Retrieve form data
//     var formData = $(this).serialize();
//     // Here, you can perform any further actions, such as AJAX request, form validation, etc.
//     // Example: Log form data to console
//     console.log(formData);
//   });

//   // Form submission handling for Cash On Delivery
//   $('#cashOnDeliveryDetails').submit(function (event) {
//     // Prevent default form submission
//     event.preventDefault();
//     // Retrieve form data
//     var formData = $(this).serialize();
//     // Here, you can perform any further actions, such as AJAX request, form validation, etc.
//     // Example: Log form data to console
//     console.log(formData);
//   });

//   // Form submission handling for eSewa Mobile Wallet
//   $('#eSewaDetails').submit(function (event) {
//     // Prevent default form submission
//     event.preventDefault();
//     // Retrieve form data
//     var formData = $(this).serialize();
//     // Here, you can perform any further actions, such as AJAX request, form validation, etc.
//     // Example: Log form data to console
//     console.log(formData);
//   });

//   // Form submission handling for IME Pay
//   $('#imePayDetails').submit(function (event) {
//     // Prevent default form submission
//     event.preventDefault();
//     // Retrieve form data
//     var formData = $(this).serialize();
//     // Here, you can perform any further actions, such as AJAX request, form validation, etc.
//     // Example: Log form data to console
//     console.log(formData);
//   });
// });

$(document).ready(function () {
  // By default, show credit card form and hide other forms
  $("#creditCardForm").show();
  $("#cashOnDeliveryForm, #eSewaForm, #imePayForm").hide();

  // Click event for Payment options
  $(".payment-i").click(function () {
    // Remove active class from all payment options
    $(".payment-i").removeClass("active");
    // Hide all forms
    $("#creditCardForm, #cashOnDeliveryForm, #eSewaForm, #imePayForm").hide();

    // Toggle active class for the clicked tab
    $(this).addClass("active");

    // Check which tab is active and show its corresponding form
    if ($(this).find(".payment-gate").text() === "Credit/Debit Card") {
      $("#creditCardForm").show();
    } else if ($(this).find(".payment-gate").text() === "Cash On Delivery") {
      $("#cashOnDeliveryForm").show();
    } else if ($(this).find(".payment-gate").text() === "eSewa Mobile Wallet") {
      $("#eSewaForm").show();
    } else if ($(this).find(".payment-gate").text() === "IME Pay") {
      $("#imePayForm").show();
    }
  });

  // Form submission handling for Credit/Debit Card
  $("#creditCardDetails").submit(function (event) {
    // Prevent default form submission
    event.preventDefault();
    // Retrieve form data
    var formData = $(this).serialize();
    // Here, you can perform any further actions, such as AJAX request, form validation, etc.
    // Example: Log form data to console
    console.log(formData);
  });

  // Form submission handling for Cash On Delivery
  $("#cashOnDeliveryDetails").submit(function (event) {
    // Prevent default form submission
    event.preventDefault();
    // Retrieve form data
    var formData = $(this).serialize();
    // Here, you can perform any further actions, such as AJAX request, form validation, etc.
    // Example: Log form data to console
    console.log(formData);
  });

  // Form submission handling for eSewa Mobile Wallet
  $("#eSewaDetails").submit(function (event) {
    // Prevent default form submission
    event.preventDefault();
    // Retrieve form data
    var formData = $(this).serialize();
    // Here, you can perform any further actions, such as AJAX request, form validation, etc.
    // Example: Log form data to console
    console.log(formData);
  });

  // Form submission handling for IME Pay
  $("#imePayDetails").submit(function (event) {
    // Prevent default form submission
    event.preventDefault();
    // Retrieve form data
    var formData = $(this).serialize();
    // Here, you can perform any further actions, such as AJAX request, form validation, etc.
    // Example: Log form data to console
    console.log(formData);
  });
});

$(document).ready(function () {
  // Toggle popup and overlay on button click
  $("#togglePopup").click(function () {
    $(".custom-overlay").toggle();
    $(".custom-popup").css("visibility", function (_, visibility) {
      return visibility === "visible" ? "hidden" : "visible";
    });
  });

  // Close popup and overlay when close button is clicked
  $("#closePopup").click(function () {
    $(".custom-overlay").hide();
    $(".custom-popup").css("visibility", "hidden");
  });

  // Close popup and overlay when overlay is clicked
  $(".custom-overlay").click(function () {
    $(".custom-overlay").hide();
    $(".custom-popup").css("visibility", "hidden");
  });

  // Prevent propagation of click event from popup to overlay
  $(".custom-popup").click(function (event) {
    event.stopPropagation();
  });
});

$(document).ready(function () {
  $(".checkbox-item").change(function () {
    $(".checkbox-item").not(this).prop("checked", false);
  });
});
