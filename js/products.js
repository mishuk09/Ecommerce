



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






$(document).ready(function () {
    // Plus button click event
    $(".quick-plus-btn-d-2").click(function () {
        var currentVal = parseInt($(this).prev(".quick-field-2").text());
        $(this).prev(".quick-field-2").text(currentVal + 1);
    });

    // Minus button click event
    $(".quick-minus-btn-d-2").click(function () {
        var currentVal = parseInt($(this).next(".quick-field-2").text());
        if (currentVal > 1) {
            $(this).next(".quick-field-2").text(currentVal - 1);
        }
    });
});





// selecting required element
const element = document.querySelector(".pagination ul");
let totalPages = 20;
let page = 10;

//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
    let liTag = "";
    let active;
    let beforePage = page - 1;
    let afterPage = page + 1;
    if (page > 1) {
        //show the next button if the page value is greater than 1
        liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${page - 1
            })"><span><i class="fas fa-angle-left"></i> </span></li>`;
    }

    if (page > 2) {
        //if page value is less than 2 then add 1 after the previous button
        liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
        if (page > 3) {
            //if page value is greater than 3 then add this (...) after the first li or page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
    }

    // how many pages or li show before the current li
    if (page == totalPages) {
        beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
        beforePage = beforePage - 1;
    }
    // how many pages or li show after the current li
    if (page == 1) {
        afterPage = afterPage + 2;
    } else if (page == 2) {
        afterPage = afterPage + 1;
    }

    for (var plength = beforePage; plength <= afterPage; plength++) {
        if (plength > totalPages) {
            //if plength is greater than totalPage length then continue
            continue;
        }
        if (plength == 0) {
            //if plength is 0 than add +1 in plength value
            plength = plength + 1;
        }
        if (page == plength) {
            //if page is equal to plength than assign active string in the active variable
            active = "active";
        } else {
            //else leave empty to the active variable
            active = "";
        }
        liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
    }

    if (page < totalPages - 1) {
        //if page value is less than totalPage value by -1 then show the last li or page
        if (page < totalPages - 2) {
            //if page value is less than totalPage value by -2 then add this (...) before the last li or page
            liTag += `<li class="dots"><span>...</span></li>`;
        }
        liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {
        //show the next button if the page value is less than totalPage(20)
        liTag += `<li class="btn next" onclick="createPagination(totalPages, ${page + 1
            })"><span><i class="fas fa-angle-right"></i></span></li>`;
    }
    element.innerHTML = liTag; //add li tag inside ul tag
    return liTag; //reurn the li tag
}



















