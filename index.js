form = document.querySelector("form");
form.addEventListener("submit", storeData);

schedule = JSON.parse(localStorage.getItem("schedule")) || [];

function storeData(e) {
  e.preventDefault();

  matchNum = document.getElementById("matchNum").value;
  teamA = document.getElementById("teamA").value;
  teamB = document.getElementById("teamB").value;
  date = document.getElementById("date").value;
  venue = document.getElementById("venue").value;

  data = {};
  data.matchNum = matchNum;
  data.teamA = teamA;
  data.teamB = teamB;
  data.date = date;
  data.venue = venue;

  schedule.push(data);
  localStorage.setItem("schedule", JSON.stringify(schedule));
  window.location.reload();
}
