function calculateProgress() {
  var dateInput = document.getElementById("dateInput").value;
  var selectedDate = new Date(dateInput);
  selectedDate.setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC

  var startDate = new Date(Date.UTC(selectedDate.getUTCFullYear(), 0, 1)); // January is 0 index
  startDate.setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC

  var endDate = new Date(Date.UTC(selectedDate.getUTCFullYear(), 11, 31)); // December is 11 index
  endDate.setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC

  var totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1; // Total days in the year
  var daysPassed = Math.floor((selectedDate - startDate) / (1000 * 60 * 60 * 24)) + 1; // Days passed in the year

  var progress = (daysPassed / totalDays) * 100;

  document.getElementById("progressResult").textContent = "Progress: " + progress.toFixed(2) + "%";
}
