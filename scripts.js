document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Order submitted! A confirmation email will be sent to the owner.");
    // Here you can add code to send form data to your backend for processing
  });
  