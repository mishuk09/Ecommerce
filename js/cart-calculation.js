$(document).ready(function () {
  // Function to calculate subtotal
  function calculateSubtotal() {
    var subtotal = 0;
    $(".cart-body-child").each(function () {
      var quantity = parseInt($(this).find("input[type='number']").val());
      var price = parseFloat(
        $(this).find(".price-color").text().replace("$", "")
      );
      subtotal += quantity * price;
    });
    $("#subtotal").text("$" + subtotal.toFixed(2));
  }

  //   Function to update totals on quantity change
  function updateTotals() {
    $(".cart-body-child").each(function () {
      var quantity = parseInt($(this).find("input[type='number']").val());
      var price = parseFloat(
        $(this).find(".price-color").text().replace("$", "")
      );
      $(this)
        .find(".phone-total")
        .text("$" + (quantity * price).toFixed(2));
    });
    calculateSubtotal();
  }

  // Increase quantity button click
  $(".increaseQuantity").click(function () {
    var inputField = $(this).siblings("input[type='number']");
    var currentValue = parseInt(inputField.val());
    inputField.val(currentValue + 1);
    updateTotals(); // Update totals when quantity increases
  });

  // Decrease quantity button click
  $(".decreaseQuantity").click(function () {
    var inputField = $(this).siblings("input[type='number']");
    var currentValue = parseInt(inputField.val());
    if (parseInt(currentValue) > 1) {
      inputField.val(currentValue - 1);
      updateTotals(); // Update totals when quantity decreases
    }
  });
  $(".delete-icon").click(function () {
    $(this).closest(".cart-body-child").remove();
    updateTotals(); // Update totals after deleting a product
  });
  // Checkbox change event
  $("input[type='checkbox']").change(function () {
    calculateSubtotal();
  });

  // Checkout button click
  $(".login-btn").click(function () {
    // Implement your checkout logic here
    alert("Checkout button clicked!");
  });

  // Initial update of totals
  updateTotals();
});
