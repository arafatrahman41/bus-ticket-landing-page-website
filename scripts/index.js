document.addEventListener('DOMContentLoaded', function() {
  const applyBtn = document.getElementById('apply-btn');
  const couponInput = document.getElementById('coupon-input');
  const phoneNumberInput = document.getElementById('phone-number');
  const showModalBtn = document.getElementById('show-modal-btn');

  applyBtn.disabled = true;
  showModalBtn.disabled = true;

  couponInput.addEventListener('input', function() {
    applyBtn.disabled = !isValidCoupon(this.value);
  });

  phoneNumberInput.addEventListener('input', function() {
    showModalBtn.disabled = !isValidPhoneNumber(this.value);
  });

  applyBtn.addEventListener('click', applyCoupon);
  showModalBtn.addEventListener('click', showModal);

  // Initialize the total price and grand total to 0
  const totalPriceElement = document.getElementById('total-price');
  const grandTotalElement = document.getElementById('grand-total');
  updateTotalPrice(0, totalPriceElement, grandTotalElement);
});

let couponApplied = false;

function isValidCoupon(coupon) {
  return !couponApplied && (coupon === 'new15' || coupon === 'couple20');
}

function isValidPhoneNumber(phoneNumber) {
  // Validate phone number format (you can use regex or other validation methods)
  return phoneNumber.length === 10; // For example, require 10-digit phone number
}

function applyCoupon() {
  const couponCode = document.getElementById('coupon-input').value.toLowerCase();
  if (isValidCoupon(couponCode)) {
    const totalPriceElement = document.getElementById('total-price');
    const grandTotalElement = document.getElementById('grand-total');
    const totalPrice = parseFloat(totalPriceElement.innerText);
    const discountedPrice = totalPrice - (totalPrice * (couponCode === 'new15' ? 0.15 : 0.20));
    updateTotalPrice(discountedPrice, totalPriceElement, grandTotalElement);
    couponApplied = true;
    this.disabled = true;
  } else {
    alert('Invalid coupon code or coupon already applied');
  }
}

function updateTotalPrice(price, totalPriceElement, grandTotalElement) {
  totalPriceElement.innerText = price.toFixed(2);
  grandTotalElement.innerText = price.toFixed(2);
}

function showModal() {
  const modal = document.getElementById('my_modal_4');
  if (modal) {
    modal.classList.add('show');
  } else {
    console.error('Modal element not found');
  }
}


//

function buyTickets() {
  document.getElementById("select-your-seat").scrollIntoView({ behavior: "smooth" });
}

const allBtn = document.getElementsByClassName("seat-btn");
let count = 1;
let backCount = 39;
let totalPrice = 0;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const seatCount = document.getElementById("seat-count");
    const selectedSeat = seatCount.innerText;

    const seatPrice = document.getElementById("seat-price");
    const selectSeatPrice = parseFloat(seatPrice.innerText);

    seatCount.innerText = count++;
    const seatLeftCount = document.getElementById("seat-left-count");
    seatLeftCount.innerText = backCount--;

    const appendingItems = document.getElementById("appending-items");
    const div = document.createElement("div");
    div.classList.add("flex", "flex-row", "justify-between");

    const p1 = document.createElement("p");
    p1.innerText = selectedSeat;
    const p2 = document.createElement("p");
    p2.innerText = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = `$${selectSeatPrice.toFixed(2)}`;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    appendingItems.appendChild(div);

    if (count > 40 && backCount < 1) {
      alert("Sorry, no more seat left");
    }

    if (count > 4) {
      alert("You can only select up to 4 seats");
    }

    e.target.style.backgroundColor = "#1DD100";
    e.target.style.color = "#ffffff";
    e.target.disabled = true;

    totalPrice += selectSeatPrice;
    document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    document.getElementById('grand-total').innerText = totalPrice.toFixed(2);
  });
}
