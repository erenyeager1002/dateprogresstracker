function calculateProgress() {
    var dateInput = document.getElementById("dateInput").value;
    var selectedDate = new Date(dateInput);
    selectedDate.setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC
  
    var startDate = new Date(Date.UTC(2024, 0, 29)); // January is 0 index
    startDate.setUTCHours(0, 0, 0, 0); // Set time to midnight in UTC
  
    var totalDays = Math.floor((selectedDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    var progress = (totalDays / 344) * 100; // 344 total days from Jan 29 to Nov 29, 2024
  
    document.getElementById("progressResult").textContent = "Progress: " + progress.toFixed(2) + "%";
  }
  