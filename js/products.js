$(document).ready(function () {
    $(".size-selection").click(function () {
        $(".size-selection").removeClass("selected");
        $(this).addClass("selected");
        var selectedSize = $(this).text();
        $(".memory-size span").text(selectedSize);
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
        $('.tab-links li').removeClass('active').addClass('inactive');
        $(this).parent('li').removeClass('inactive').addClass('active');

        e.preventDefault();
    });
});


