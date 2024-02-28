

// #################################################
// ####                                            ####
// ####          Dropdown functionality            ####
// ####                                            ####
// ################################################## 

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




function toggleSearch() {
    var logossDiv = document.getElementById("logoss");
    if (logossDiv.style.display === "none") {
        logossDiv.style.display = "block";
    } else {
        logossDiv.style.display = "none";
    }
};



document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.dropdown-div');
    const navMenuHeight = navMenu.clientHeight;
    const scrollThreshold = navMenu.offsetTop; // or set your own threshold

    function handleScroll() {
        if (window.pageYOffset > scrollThreshold) {
            navMenu.classList.add('fixed', 'top-0');
        } else {
            navMenu.classList.remove('fixed', 'top-0');
        }
    }

    window.addEventListener('scroll', handleScroll);
});




// #################################################
// ####                                            ####
// ####          GO TO TOP js              ####
// ####                                            ####
// ################################################## 

document.addEventListener('DOMContentLoaded', function () {
    const goToTopButton = document.getElementById('goToTopButton');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            goToTopButton.classList.add('show');
        } else {
            goToTopButton.classList.remove('show');
        }
    });

    // Smooth scroll to top
    goToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});