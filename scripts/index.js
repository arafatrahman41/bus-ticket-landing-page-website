function buyTickets() {
  const selectYourSeat = document.getElementById("select-your-seat");
  selectYourSeat.scrollIntoView({ behavior: "smooth" });
}

const allBtn = document.getElementsByClassName("seat-btn");
let count = 1;
let backCount = 39;

for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    const seatCount = document.getElementById("seat-count");
    const selectedSeat = seatCount.innerText;

    const seatPrice = document.getElementById("seat-price");
    const selectSeatPrice = seatPrice.innerText;

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
    p3.innerText = selectSeatPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    appendingItems.appendChild(div);

    if (count > 40 && backCount < 1) {
      alert("Sorry, no more seat left");
    }

    if (count > 4) {
      alert("You can only up to select 4 seats");
    }

    e.target.style.backgroundColor = "#1DD100";
    e.target.style.color = "#ffffff";
    e.target.disabled = true;
   
    const totalPrice = document.getElementById('total-price');
    const currentTotalPrice = parseInt(totalPrice.innerText);
    if (!isNaN(currentTotalPrice)) {
        const newTotalPrice = currentTotalPrice + parseInt(selectSeatPrice);
        totalPrice.innerText = newTotalPrice;
    } else {
        console.error('Total price element does not contain a valid numeric value');
    }

    document.getElementById('apply-btn').addEventListener('click', function(){
        const couponInput = document.getElementById('coupon-input').value.toLowerCase();
    })
  });
}
