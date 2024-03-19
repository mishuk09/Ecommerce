



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

$(document).ready(function () {
    $('.tab-content:first').show(); // Show the first tab content by default
    $('.tab-links a').on('click', function (e) {
        var currentAttrValue = $(this).attr('href');
        // Show/Hide Tabs
        $('.tab-content').hide();
        $(currentAttrValue).fadeIn();

        // Change/remove current tab to active
        $('.tab-links li').removeClass('current-tab').addClass('inactive-tab');
        $(this).parent('li').removeClass('inactive-tab').addClass('current-tab');

        e.preventDefault();
    });
});




$(document).ready(function () {
    var mainSlider = $('#main-slider');

    // Pause the video when switching slides in the main slider
    mainSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var iframe = mainSlider.find('.slick-slide').eq(currentSlide).find('iframe');
        if (iframe.length > 0) {
            var player = new YT.Player(iframe[0]);
            player.pauseVideo();
        }
    });
});



// $(document).ready(function () {
//     // Show main image in image viewer on click
//     $('#main-slider .splide__slide:not(:first-child)').on('click', function () {
//         var imageUrl = $(this).find('img').attr('src');
//         $('#main-image').attr('src', imageUrl);
//         $('.image-viewer').fadeIn();
//     });

//     // Close image viewer on close icon click
//     $('.close-icon').on('click', function () {
//         $('.image-viewer').fadeOut();
//     });
// });



// $(document).ready(function () {
//     // Show main image in image viewer on click
//     $('#main-slider .splide__slide:not(:first-child)').on('click', function () {
//         var imageUrl = $(this).find('img').attr('src');
//         $('#main-image').attr('src', imageUrl);
//         $('.image-viewer').fadeIn();
//     });

//     // Close image viewer on close icon click
//     $('.close-icon').on('click', function () {
//         $('.image-viewer').fadeOut();
//     });
// });


$(document).ready(function () {
    // Show main image in image viewer on click
    $('#main-slider .splide__slide:not(:first-child)').on('click', function () {
        var imageUrl = $(this).find('img').attr('src');
        $('#main-image').attr('src', imageUrl);
        $('.image-viewer, .overlay').fadeIn();
    });

    // Close image viewer on close icon click
    $('.close-icon, .overlay').on('click', function () {
        $('.image-viewer, .overlay').fadeOut();
    });
});






$(document).ready(function () {
    // Increment button
    $(".quick-plus-btn-d").click(function () {
        var value = parseInt($(this).siblings('.quick-field-d').text());
        $(this).siblings('.quick-field-d').text(value + 1);
    });

    // Decrement button
    $(".quick-minus-btn-d").click(function () {
        var value = parseInt($(this).siblings('.quick-field-d').text());
        if (value > 1) {
            $(this).siblings('.quick-field-d').text(value - 1);
        }
    });

    // Add To Cart button
    $("#add-to-cart-btn").click(function () {
        var cartValue = parseFloat($("#cart-value").text().replace(/[^\d.]/g, '')); // Extract numerical value
        var quickFieldValue = parseInt($(".quick-field-d").text());
        var newCartValue = cartValue + quickFieldValue;
        $("#cart-value").text(newCartValue);
    });
});







// $(document).ready(function () {
//     $("#add-to-cart-btn").click(function () {
//         $("#toast").removeClass("hidden"); // Show the toast
//         setTimeout(function () {
//             $("#toast").addClass("hidden"); // Hide the toast after 3 seconds
//         }, 3000);
//     });
// });





















