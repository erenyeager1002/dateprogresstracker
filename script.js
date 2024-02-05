function calculateProgress() {
  var dateInput = document.getElementById("dateInput").value;
  var selectedDate = new Date(dateInput);
  selectedDate.setUTCHours(0, 0, 0, 0);
  
  var startDate = new Date(Date.UTC(selectedDate.getUTCFullYear(), 0, 1)); 
  startDate.setUTCHours(0, 0, 0, 0); 
  
  var endDate = new Date(Date.UTC(selectedDate.getUTCFullYear(), 11, 31)); 
  endDate.setUTCHours(0, 0, 0, 0); 
  
  var totalDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1; 
  var daysPassed = Math.floor((selectedDate - startDate) / (1000 * 60 * 60 * 24)) + 1; 
  var progress = (daysPassed / totalDays) * 100;
  var progressBar = document.getElementById("progressBar");
  progressBar.style.width = progress.toFixed(2) + "%";
  
  var progressText = document.getElementById("progressText");
  progressText.textContent = "Progress: " + progress.toFixed(2) + "%";
}
