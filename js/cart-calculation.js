
// function updatePhoneNumber(isIncrease) {
//     const phoneNumberField = document.getElementById('phone-number-field');
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);

//     let newPhoneNumber;

//     if (isIncrease) {
//         newPhoneNumber = previousPhoneNumber + 1;
//     } else {
//         // Check if phone number is already one to prevent going below 1
//         newPhoneNumber = previousPhoneNumber > 1 ? previousPhoneNumber - 1 : 1;
//     }

//     phoneNumberField.value = newPhoneNumber;

//     return newPhoneNumber;
// }


// function updatePhoneTotalPrice(newPhoneNumber) {
//     const phoneTotalPrice = newPhoneNumber * 1200;
//     const phoneTotalElement = document.getElementById('phone-total');
//     phoneTotalElement.innerText = phoneTotalPrice;
// }


// document.getElementById('btn-phone-plus').addEventListener('click', function () {
//     const newPhoneNumber = updatePhoneNumber(true);

//     updatePhoneTotalPrice(newPhoneNumber);
//     calculateSubTotal();
// });


// document.getElementById('btn-phone-minus').addEventListener('click', function () {
//     const newPhoneNumber = updatePhoneNumber(false);

//     updatePhoneTotalPrice(newPhoneNumber);
//     calculateSubTotal();
// });


// function updateCaseNumber(isIncrease) {
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);

//     let newCaseNumber;

//     if (isIncrease) {
//         newCaseNumber = previousCaseNumber + 1;
//     } else {
//         // Check if case number is already one to prevent going below 1
//         newCaseNumber = previousCaseNumber > 1 ? previousCaseNumber - 1 : 1;
//     }

//     caseNumberField.value = newCaseNumber;

//     return newCaseNumber;
// }


// function updateCaseTotalPrice(newCaseNumber) {
//     const caseTotalPrice = newCaseNumber * 350;
//     const caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// }


// document.getElementById('btn-case-plus').addEventListener('click', function () {
//     const newCaseNumber = updateCaseNumber(true);

//     updateCaseTotalPrice(newCaseNumber);
//     calculateSubTotal();
// });


// document.getElementById('btn-case-minus').addEventListener('click', function () {
//     const newCaseNumber = updateCaseNumber(false);

//     updateCaseTotalPrice(newCaseNumber);
//     calculateSubTotal();
// });


// function getTextElementValueById(elementId) {
//     const phoneTotalElement = document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal = parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }


// function setTextElementValueById(elementId, value) {
//     const subTotalElement = document.getElementById(elementId);
//     subTotalElement.innerText = value;
// }


// function calculateSubTotal() {
//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');

//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     setTextElementValueById('sub-total', currentSubTotal);
// }


// calculateSubTotal();






// // Function to remove the cart item
// function removeCartItem(cartItem) {
//     cartItem.remove();
//     calculateSubTotal();
// }


// document.querySelectorAll('.fa-trash-can').forEach(function (trashIcon) {
//     trashIcon.addEventListener('click', function () {
//         const cartItem = trashIcon.closest('.cart-body-child');

//         removeCartItem(cartItem);
//     });
// });

// // Function to remove the cart item


document.addEventListener("DOMContentLoaded", function () {
    const phonePrice = 1200; // Price of phone
    const casePrice = 350; // Price of case

    // Function to update total price
    function updateTotalPrice(price) {
        console.log(price)


        // const phoneQuantity = parseInt(document.getElementById('phone-number-field').value);
        // const caseQuantity = parseInt(document.getElementById('case-number-field').value);
        const subtotalText = document.getElementById('subtotal').textContent;


        // const phoneTotal = phoneQuantity * phonePrice;
        // const caseTotal = caseQuantity * casePrice;

        // document.getElementById('phone-total').textContent = phoneTotal.toFixed(2);
        // document.getElementById('case-total').textContent = caseTotal.toFixed(2);


        if (price === 1200) {
            const phoneQuantity = parseInt(document.getElementById('phone-number-field').value);
            const phoneTotal = phoneQuantity * phonePrice;
            document.getElementById('phone-total').textContent = phoneTotal.toFixed(2);

            const newTotal = Number(subtotalText) - Number(phoneTotal);
            document.getElementById('subtotal').textContent = newTotal.toFixed(2);

            return;

        }
        else if (price === 350) {
            const caseQuantity = parseInt(document.getElementById('case-number-field').value);
            const caseTotal = caseQuantity * casePrice;
            document.getElementById('case-total').textContent = caseTotal.toFixed(2);

            const newTotal = Number(subtotalText) - Number(caseTotal);
            document.getElementById('subtotal').textContent = newTotal.toFixed(2);
            return;
        }
        else {



            const phoneQuantity = parseInt(document.getElementById('phone-number-field').value);
            const phoneTotal = phoneQuantity * phonePrice;
            document.getElementById('phone-total').textContent = phoneTotal.toFixed(2);

            const caseQuantity = parseInt(document.getElementById('case-number-field').value);
            const caseTotal = caseQuantity * casePrice;
            document.getElementById('case-total').textContent = caseTotal.toFixed(2);

            let subtotal;
            if (phoneTotal && caseTotal) {
                subtotal = phoneTotal + caseTotal;

            }
            else if (!phoneTotal) {
                subtotal = caseTotal;
            }
            else if (!caseTotal) {
                subtotal = phoneTotal;
            }
            // const subtotal = phoneTotal + caseTotal;
            document.getElementById('subtotal').textContent = subtotal.toFixed(2);
        }
    }

    // Add event listeners for quantity buttons
    document.getElementById('btn-phone-minus').addEventListener('click', function () {
        const phoneField = document.getElementById('phone-number-field');
        if (parseInt(phoneField.value) > 0) {
            phoneField.value = parseInt(phoneField.value) - 1;
            updateTotalPrice();
        }
    });

    document.getElementById('btn-phone-plus').addEventListener('click', function () {
        const phoneField = document.getElementById('phone-number-field');
        phoneField.value = parseInt(phoneField.value) + 1;
        updateTotalPrice();
    });

    document.getElementById('btn-case-minus').addEventListener('click', function () {
        const caseField = document.getElementById('case-number-field');
        if (parseInt(caseField.value) > 0) {
            caseField.value = parseInt(caseField.value) - 1;
            updateTotalPrice();
        }
    });

    document.getElementById('btn-case-plus').addEventListener('click', function () {
        const caseField = document.getElementById('case-number-field');
        caseField.value = parseInt(caseField.value) + 1;
        updateTotalPrice();
    });

    // Add event listener for delete icon
    document.querySelectorAll('.delete-icon').forEach(function (icon) {
        icon.addEventListener('click', function () {
            const item = this.closest('.cart-body-child');
            const price = parseFloat(item.querySelector('.price-color').textContent.replace('$', ''));
            // console.log(price);
            updateTotalPrice(price); // Subtract the price of the removed item
            item.remove();
        });
    });

    // Initial update of total price
    updateTotalPrice();
});