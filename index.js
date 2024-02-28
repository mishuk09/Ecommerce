

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

        // Add smooth transition effect using CSS
        dropdownContents[index].style.transition = 'opacity 1s ease, transform 1s ease'; // Change timing and property as needed
    });
});

// document.addEventListener('DOMContentLoaded', function () {
//     var dropdownButtons = document.querySelectorAll('.dropdown-button');
//     var dropdownContents = document.querySelectorAll('.dropdown-content');

//     function showDropdown(content) {
//         content.classList.remove('hidden');
//     }

//     function hideDropdown(content) {
//         content.classList.add('hidden');
//     }

//     dropdownButtons.forEach(function (button, index) {
//         button.addEventListener('click', function (event) {
//             event.preventDefault();
//             var content = dropdownContents[index];
//             content.classList.toggle('hidden');
//         });

//         button.addEventListener('mouseenter', function () {
//             var content = dropdownContents[index];
//             showDropdown(content);
//         });

//         button.addEventListener('mouseleave', function () {
//             var content = dropdownContents[index];
//             hideDropdown(content);
//         });

//         dropdownContents[index].addEventListener('mouseenter', function () {
//             showDropdown(this);
//         });

//         dropdownContents[index].addEventListener('mouseleave', function () {
//             hideDropdown(this);
//         });
//     });
// });




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




var btn = document.querySelector('.toggle');
var btnst = true;
btn.onclick = function () {
    if (btnst == true) {
        document.querySelector('.toggle span').classList.add('toggle');
        document.getElementById('sidebar').classList.add('sidebarshow');
        btnst = false;
    } else if (btnst == false) {
        document.querySelector('.toggle span').classList.remove('toggle');
        document.getElementById('sidebar').classList.remove('sidebarshow');
        btnst = true;
    }
}



// sidebar dropdown

document.addEventListener("DOMContentLoaded", function () {
    const categoryDropdown = document.getElementById("categoryDropdown");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const categoryMenu = document.getElementById("cliked-id");

    categoryDropdown.addEventListener("click", function () {
        dropdownMenu.classList.toggle("hidden");
        categoryMenu.classList.toggle("clicked");
    });
});


