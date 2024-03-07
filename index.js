
// JavaScript to handle dropdown functionality
document.addEventListener("DOMContentLoaded", function () {
    // Dropdown 1
    var clickedId1 = document.getElementById("clicked-id1");
    var dropdownMenu1 = document.getElementById("dropdownMenu1");
    clickedId1.addEventListener("click", function (event) {
        event.preventDefault();
        var rect = clickedId1.getBoundingClientRect();
        dropdownMenu1.style.left = rect.left + "px";
        dropdownMenu1.style.top = rect.bottom + "px";
        dropdownMenu1.classList.toggle("hidden");
        clickedId1.classList.toggle("clicked-bg");

        // dropdownMenu1.classList.toggle("homecolor");

    });

    // Dropdown 2
    var clickedId2 = document.getElementById("clicked-id2");
    var dropdownMenu2 = document.getElementById("dropdownMenu2");
    clickedId2.addEventListener("click", function (event) {
        event.preventDefault();
        var rect = clickedId2.getBoundingClientRect();
        dropdownMenu2.style.left = rect.left + "px";
        dropdownMenu2.style.top = rect.bottom + "px";
        dropdownMenu2.classList.toggle("hidden");
        clickedId2.classList.toggle("clicked-bg");
    });

    // Dropdown 3
    var clickedId3 = document.getElementById("clicked-id3");
    var dropdownMenu3 = document.getElementById("dropdownMenu3");
    clickedId3.addEventListener("click", function (event) {
        event.preventDefault();
        var rect = clickedId3.getBoundingClientRect();
        dropdownMenu3.style.left = rect.left + "px";
        dropdownMenu3.style.top = rect.bottom + "px";
        dropdownMenu3.classList.toggle("hidden");
        clickedId3.classList.toggle("clicked-bg");
    });

    // Dropdown 4
    var clickedId4 = document.getElementById("clicked-id4");
    var dropdownMenu4 = document.getElementById("dropdownMenu4");
    clickedId4.addEventListener("click", function (event) {
        event.preventDefault();
        var rect = clickedId4.getBoundingClientRect();
        dropdownMenu4.style.left = rect.left + "px";
        dropdownMenu4.style.top = rect.bottom + "px";
        dropdownMenu4.classList.toggle("hidden");
        clickedId4.classList.toggle("clicked-bg");
    });

    // Dropdown 5
    var clickedId5 = document.getElementById("clicked-id5");
    var dropdownMenu5 = document.getElementById("dropdownMenu5");
    clickedId5.addEventListener("click", function (event) {
        event.preventDefault();
        var rect = clickedId5.getBoundingClientRect();
        dropdownMenu5.style.left = rect.left + "px";
        dropdownMenu5.style.top = rect.bottom + "px";
        dropdownMenu5.classList.toggle("hidden");
        clickedId5.classList.toggle("clicked-bg");
    });
});


// #################################################
// ####                                            ####
// ####          Dropdown functionality            ####
// ####                                            ####
// ################################################## 

// $(document).ready(function () {
//     $(".banner-slider").owlCarousel();
// });

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

//         // Add smooth transition effect using CSS
//         dropdownContents[index].style.transition = 'opacity 1s ease, transform 1s ease'; // Change timing and property as needed
//     });
// });




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



// #################################################
// ####                                            ####
// ####      Slider    js     code                 ####
// ####                                            ####
// ################################################## 

document.addEventListener("DOMContentLoaded", function () {
    // Get reference to carousel items and slide control buttons
    const carouselItems = document.querySelectorAll('[data-carousel-item]');
    const prevButton = document.querySelector('[data-carousel-prev]');
    const nextButton = document.querySelector('[data-carousel-next]');

    let currentIndex = 0; // Initialize index of the current item

    // Function to show a specific carousel item with a smooth transition
    function showCarouselItem(index) {
        // Hide all carousel items
        carouselItems.forEach(item => {
            item.style.transition = "opacity 0.9s ease"; // Adjust transition timing
            item.style.opacity = "0";
            item.classList.add('hidden');
        });
        // Show the selected carousel item
        setTimeout(() => {
            carouselItems[index].style.opacity = "1";
            carouselItems[index].classList.remove('hidden');
            currentIndex = index; // Update current index
        }, 100); // Adjust delay if necessary
    }

    // Event listener for previous button click
    prevButton.addEventListener('click', () => {
        let newIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showCarouselItem(newIndex);
    });

    // Event listener for next button click
    nextButton.addEventListener('click', () => {
        let newIndex = (currentIndex + 1) % carouselItems.length;
        showCarouselItem(newIndex);
    });

    // Initially show the first carousel item
    showCarouselItem(0);
});



// #################################################
// ####                                            ####
// ####      Fade Effect                           ####
// ####                                            ####
// ################################################## 



var elScroll = document.querySelectorAll('.scroll'); //pega todos os elementos com a classe .scroll

document.onscroll = function () { //ao rolar a tela...
    elScroll.forEach(elScroll => { //cada elemento com a classe .scroll ...
        var positionEl = elScroll.getBoundingClientRect(); //pega valores da posição do elemento
        var alturaEl = positionEl.top; //pega distancia do topo da tela

        if (alturaEl < 300) { //se a distancia do topo for menor que 300
            elScroll.classList.add('scroll--show'); //adiciona a classe .scroll--show
        }
    });
}






// #################################################
// ####                                            ####
// ####      Tooltip effect                           ####
// ####                                            ####
// ################################################## 

document.getElementById('tooltip-btn').addEventListener('mouseenter', function () {
    var tooltip = this.nextElementSibling;
    tooltip.style.visibility = 'visible';
});

document.getElementById('tooltip-btn').addEventListener('mouseleave', function () {
    var tooltip = this.nextElementSibling;
    tooltip.style.visibility = 'hidden';
});



// Initialize tooltips for each tooltip trigger element
const tooltipTriggers = document.querySelectorAll('[data-tooltip-target]');
tooltipTriggers.forEach(trigger => {
    const targetId = trigger.getAttribute('data-tooltip-target');
    const placement = trigger.getAttribute('data-tooltip-placement');

    const tooltip = document.getElementById(targetId);
    if (tooltip) {
        new Popper(trigger, tooltip, {
            placement: placement,
        });

        // Show tooltip on trigger hover (optional)
        trigger.addEventListener('mouseenter', function () {
            tooltip.classList.add('visible', 'opacity-100');
            tooltip.classList.remove('invisible', 'opacity-0');
        });
        // Hide tooltip on trigger mouseleave (optional)
        trigger.addEventListener('mouseleave', function () {
            tooltip.classList.remove('visible', 'opacity-100');
            tooltip.classList.add('invisible', 'opacity-0');
        });
    }
});






// document.addEventListener("DOMContentLoaded", function () {
//     // Get the carousel wrapper
//     var carousel = document.getElementById("default-carousel");
//     // Get the carousel items
//     var carouselItems = carousel.querySelectorAll("[data-carousel-item]");
//     // Initialize variables for touch events
//     var touchStartX = 0;
//     var touchEndX = 0;

//     // Add event listeners for touch events
//     carousel.addEventListener("touchstart", function (event) {
//         touchStartX = event.touches[0].clientX;
//     });

//     carousel.addEventListener("touchend", function (event) {
//         touchEndX = event.changedTouches[0].clientX;
//         handleGesture();
//     });

//     // Function to handle touch gestures
//     function handleGesture() {
//         // Calculate the distance swiped
//         var deltaX = touchEndX - touchStartX;
//         // Set a threshold for swipe
//         var threshold = 50;

//         // If the swipe distance is greater than the threshold, move to the appropriate slide
//         if (Math.abs(deltaX) > threshold) {
//             if (deltaX > 0) {
//                 // Swipe right, move to previous slide
//                 showSlide(-1);
//             } else {
//                 // Swipe left, move to next slide
//                 showSlide(1);
//             }
//         }
//     }

//     // Function to show a specific slide
//     function showSlide(direction) {
//         // Find the currently active slide
//         var currentSlideIndex = Array.from(carouselItems).findIndex(function (item) {
//             return item.classList.contains("focused");
//         });

//         // Calculate the index of the next slide
//         var nextSlideIndex = currentSlideIndex + direction;

//         // Check if the next slide index is within bounds
//         if (nextSlideIndex < 0) {
//             nextSlideIndex = carouselItems.length - 1;
//         } else if (nextSlideIndex >= carouselItems.length) {
//             nextSlideIndex = 0;
//         }

//         // Hide all slides
//         carouselItems.forEach(function (item) {
//             item.classList.add("hidden");
//             item.classList.remove("focused");
//         });

//         // Show the next slide
//         carouselItems[nextSlideIndex].classList.remove("hidden");
//         carouselItems[nextSlideIndex].classList.add("focused");
//     }
// });









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




// function toggleSearch() {
//     var logossDiv = document.getElementById("logoss");
//     if (logossDiv.style.display === "none") {
//         logossDiv.style.display = "block";
//     } else {
//         logossDiv.style.display = "none";
//     }
// };


// window.addEventListener('scroll', function () {
//     var sidebar = document.getElementById('sidebar');
//     var topPos = sidebar.getBoundingClientRect().top;
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (topPos <= 0 && scrollTop > 0) {
//         sidebar.classList.add('fixed-sidebar');
//     } else {
//         sidebar.classList.remove('fixed-sidebar');
//     }
// });






// toggle small button


// $(document).ready(function () {
//     $(".toggle").click(function () {
//         $("aside").toggleClass("close")
//     });
// });

// // click outside
// $(document).mouseup(function (e) {
//     var container = $("aside");
//     if (!container.is(e.target) && container.has(e.target).length === 0) {
//         $("aside").removeClass("close")
//     }
// });





// var btn = document.querySelector('.toggle');
// var btnst = true;
// btn.onclick = function () {
//     if (btnst == true) {
//         document.querySelector('.toggle span').classList.add('toggle');
//         document.getElementById('sidebar').classList.add('sidebarshow');
//         btnst = false;
//     } else if (btnst == false) {
//         document.querySelector('.toggle span').classList.remove('toggle');
//         document.getElementById('sidebar').classList.remove('sidebarshow');
//         btnst = true;
//     }
// }



// sidebar dropdown

// document.addEventListener("DOMContentLoaded", function () {
//     const categoryDropdown = document.getElementById("categoryDropdown");
//     const dropdownMenu = document.getElementById("dropdownMenu");
//     const categoryMenu = document.getElementById("cliked-id");

//     categoryDropdown.addEventListener("click", function () {
//         // Toggle the 'hidden' class for smooth animation
//         dropdownMenu.classList.toggle("hidden");
//         // Get the height of the menu after the 'hidden' class is toggled
//         const newHeight = dropdownMenu.scrollHeight;
//         // Set the max-height to the new height for smooth transition
//         dropdownMenu.style.maxHeight = dropdownMenu.classList.contains("hidden") ? 0 : newHeight + "px";
//         // Toggle the 'clicked' class if needed
//         categoryMenu.classList.toggle("clicked");
//     });
// });





// document.addEventListener("DOMContentLoaded", function () {
//     const productsDropdown = document.getElementById("categoryDropdowntwo"); // Changed ID
//     const productsMenu = productsDropdown.querySelector("#dropdownMenu"); // Changed ID

//     productsDropdown.addEventListener("click", function () {
//         // Toggle the 'hidden' class for smooth animation
//         productsMenu.classList.toggle("hidden");
//         // Get the height of the menu after the 'hidden' class is toggled
//         const newHeight = productsMenu.scrollHeight;
//         // Set the max-height to the new height for smooth transition
//         productsMenu.style.maxHeight = productsMenu.classList.contains("hidden") ? 0 : newHeight + "px";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const productsDropdown = document.getElementById("categoryDropdownthree"); // Changed ID
//     const productsMenu = productsDropdown.querySelector("#dropdownMenu"); // Changed ID

//     productsDropdown.addEventListener("click", function () {
//         // Toggle the 'hidden' class for smooth animation
//         productsMenu.classList.toggle("hidden");
//         // Get the height of the menu after the 'hidden' class is toggled
//         const newHeight = productsMenu.scrollHeight;
//         // Set the max-height to the new height for smooth transition
//         productsMenu.style.maxHeight = productsMenu.classList.contains("hidden") ? 0 : newHeight + "px";
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const productsDropdown = document.getElementById("categoryDropdownfour"); // Changed ID
//     const productsMenu = productsDropdown.querySelector("#dropdownMenu"); // Changed ID

//     productsDropdown.addEventListener("click", function () {
//         // Toggle the 'hidden' class for smooth animation
//         productsMenu.classList.toggle("hidden");
//         // Get the height of the menu after the 'hidden' class is toggled
//         const newHeight = productsMenu.scrollHeight;
//         // Set the max-height to the new height for smooth transition
//         productsMenu.style.maxHeight = productsMenu.classList.contains("hidden") ? 0 : newHeight + "px";
//     });
// });
// ahgfjkagsfdjkasgdjasdgf


// const containerr = document.getElementById('containerr');
// const items = document.getElementById('items');
// const arrowLeft = document.querySelector('.arrow.left');
// const arrowRight = document.querySelector('.arrow.right');

// const itemWidth = document.querySelector('.item').offsetWidth;

// arrowLeft.addEventListener('click', () => {
//     items.style.transform = `translateX(${Math.min(0, items.getBoundingClientRect().left + itemWidth)}px)`;
// });

// arrowRight.addEventListener('click', () => {
//     items.style.transform = `translateX(${Math.max(-(items.scrollWidth - containerr.offsetWidth), items.getBoundingClientRect().left - itemWidth)}px)`;
// });





// hover

// JavaScript to handle hover functionality
// const parentDiv = document.querySelector('.parent-div');
// const textOverlay = parentDiv.querySelector('.text-overlay');

// parentDiv.addEventListener('mouseenter', () => {
//     textOverlay.classList.remove('hidden');
// });

// parentDiv.addEventListener('mouseleave', () => {
//     textOverlay.classList.add('hidden');
// });


