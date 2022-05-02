schedule = JSON.parse(localStorage.getItem("schedule")) || [];
favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];
filter = document.getElementById("filterVenue");

filter.addEventListener("change", myFilter);

displayData(schedule);

function myFilter() {
  filterValue = document.getElementById("filterVenue").value;

  filteredArr = schedule.filter((el) => {
    return el.venue === filterValue;
  });
  displayData(filteredArr);
}

function displayData(data) {
  document.querySelector("tbody").innerHTML = null;
  data.forEach((el) => {
    tr = document.createElement("tr");

    td1 = document.createElement("td");
    td1.innerText = el.matchNum;
    td2 = document.createElement("td");
    td2.innerText = el.teamA;
    td3 = document.createElement("td");
    td3.innerText = el.teamB;
    td4 = document.createElement("td");
    td4.innerText = el.date;
    td5 = document.createElement("td");
    td5.innerText = el.venue;
    td6 = document.createElement("td");
    td6.innerText = "Favourite";
    td6.style.color = "green";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", () => {
      addFav(el);
    });

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}

function addFav(el) {
  favouritesArr.push(el);
  localStorage.setItem("favourites", JSON.stringify(favouritesArr));
}
