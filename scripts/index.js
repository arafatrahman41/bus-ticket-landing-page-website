function buyTickets(){
    const selectYourSeat = document.getElementById('select-your-seat');
    selectYourSeat.scrollIntoView({ behavior: 'smooth' });
}

const allBtn = document.getElementsByClassName('seat-btn');
let count = 1;
let backCount = 39;

    for(const btn of allBtn){
     btn.addEventListener('click', function(e){
       const seatCount = document.getElementById('seat-count');
       seatCount.innerText = count++;
       const seatLeftCount = document.getElementById('seat-left-count');
       seatLeftCount.innerText = backCount--;

       
     })   
    }