const seatContainer = document.querySelector('.seat-container');
const selectedSeatsDisplay = document.getElementById('selected-seats');

let selectedSeats = [];

seatContainer.addEventListener('click', (event) => {
  const clickedSeat = event.target;
  const seatNumber = clickedSeat.dataset.seatNumber;

  if (clickedSeat.classList.contains('selected')) {
    // Deselect the seat
    selectedSeats = selectedSeats.filter(num => num !== seatNumber);
    clickedSeat.classList.remove('selected');
  } else {
    // Select the seat
    selectedSeats.push(seatNumber);
    clickedSeat.classList.add('selected');
  }

  updateSelectedSeatsDisplay();
});

const updateSelectedSeatsDisplay = () => {
  selectedSeatsDisplay.textContent = `Selected Seats: ${selectedSeats.join(', ')}`;