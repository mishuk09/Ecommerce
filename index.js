
document.addEventListener('DOMContentLoaded', function () {
    var dropdownButtons = document.querySelectorAll('.dropdown-button');
    var dropdownContents = document.querySelectorAll('.dropdown-content');

    function showDropdown(content) {
        content.classList.remove('hidden');
    }

    function hideDropdown(content) {
        content.classList.add('hidden');
    }

    dropdownButtons.forEach(function (button, index) {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            var content = dropdownContents[index];
            content.classList.toggle('hidden');
        });

        button.addEventListener('mouseenter', function () {
            var content = dropdownContents[index];
            showDropdown(content);
        });

        button.addEventListener('mouseleave', function () {
            var content = dropdownContents[index];
            hideDropdown(content);
        });

        dropdownContents[index].addEventListener('mouseenter', function () {
            showDropdown(this);
        });

        dropdownContents[index].addEventListener('mouseleave', function () {
            hideDropdown(this);
        });
    });
});