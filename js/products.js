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


