const servicePrices = {
  "Express Laundry": 30.00,
  "Wash Only": 5.00,
  "Stain Removal": 18.00,
  "Leather Care": 35.00,
  "Ironing": 10.00,
  "Carpet Cleaning": 50.00,
  "Curtain Cleaning": 40.00,
  "Wash & Fold": 20.00,
  "Dry Cleaning": 28.00
};

const checkboxes = document.querySelectorAll('.service-checkbox-group input[type="checkbox"]');
const priceDisplay = document.getElementById('totalPrice');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    let total = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) {
        total += servicePrices[cb.value] || 0;
      }
    });
    priceDisplay.textContent = `Total: RM${total.toFixed(2)}`;
  });
});

document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  const inputs = form.querySelectorAll('input, textarea, select');
  let valid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.style.borderColor = 'red';
      valid = false;
    } else {
      input.style.borderColor = '#ccc';
    }
  });

  if (valid) {
    confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });

    Swal.fire({
      icon: 'success',
      title: 'Booking Confirmed!',
      html: '<b>Thank you</b> for choosing <span style="color:#2ab7ca;">Bubble Lab Laundry</span>.<br>Your booking has been successfully received!',
      confirmButtonColor: '#2ab7ca',
      confirmButtonText: 'Okay!'
    });

    form.reset();
    priceDisplay.textContent = 'Total: RM0.00';
  }
});
