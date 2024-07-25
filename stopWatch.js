// Initialize time variables
let [seconds, minutes, hours] = [0, 0, 0];

// Get the element to display the time
let displayTime = document.getElementById("displayTime");

// Variable to store the timer ID
let timer = null;

// Function to update the stopwatch
function stopWatch() {
  seconds++; // Increment seconds by 1

  // Check if seconds have reached 60
  if (seconds === 60) {
    seconds = 0; // Reset seconds to 0
    minutes++; // Increment minutes by 1

    // Check if minutes have reached 60
    if (minutes === 60) {
      minutes = 0; // Reset minutes to 0
      hours++; // Increment hours by 1
    }
  }

  // Update the display with the formatted time
  displayTime.innerHTML = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;
}

// Function to start or resume the stopwatch
function startWatch() {
  // Clear any existing timer to avoid multiple intervals
  if (timer != null) {
    clearInterval(timer);
  }

  // Set a new interval to call stopWatch every second
  timer = setInterval(stopWatch, 1000);
}

// Function to pause the stopwatch
function pauseTime() {
  // Clear the interval, stopping the stopwatch
  clearInterval(timer);
}

// Function to reset the stopwatch
function resetTime() {
  // Clear the interval and stop the stopwatch
  clearInterval(timer);

  // Reset time variables to 0
  [seconds, minutes, hours] = [0, 0, 0];

  // Update the display to show 00:00:00
  displayTime.innerHTML = "00:00:00";
}

// Function to format time units to always be two digits
function formatTime(unit) {
  // Prefix single-digit units with a leading zero
  return unit < 10 ? "0" + unit : unit;
}
