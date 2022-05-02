favouritesArr = JSON.parse(localStorage.getItem("favourites")) || [];

displayData(favouritesArr);

function displayData(data) {
  data.forEach((el, i) => {
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
    td6.innerText = "Delete";
    td6.style.color = "red";
    td6.style.cursor = "pointer";
    td6.addEventListener("click", () => {
      delIt(el, i);
    });

    tr.append(td1, td2, td3, td4, td5, td6);

    document.querySelector("tbody").append(tr);
  });
}

function delIt(el, i) {
  favouritesArr.splice(i, 1);
  localStorage.setItem("favourites", JSON.stringify(favouritesArr));
  window.location.reload();
}
