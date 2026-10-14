var charts = [
  {
    idiom: "Bump Chart",
    title: "Sydney's Changing Riders, 2017–2025",
    keywords: "rank ranking line Sydney Opal rider group card",
    id: "bump_chart"
  },
  {
    idiom: "Waffle Chart",
    title: "Who Rides What in Sydney",
    keywords: "share percent square grid Sydney bus metro ferry rider group",
    id: "waffle_chart"
  },
  {
    idiom: "Butterfly Chart",
    title: "Weekday vs Weekend in Melbourne",
    keywords: "bar weekday weekend Melbourne train tram bus patronage",
    id: "butterfly_chart"
  },
  {
    idiom: "Radar Chart",
    title: "How Does the Ride Feel?",
    keywords: "spider satisfaction comfort safety cost Queensland",
    id: "radar_chart"
  },
  {
    idiom: "Radial Bar Chart",
    title: "On Time in Queensland, 2025–26",
    keywords: "circular on time punctuality reliability Queensland",
    id: "radial_chart"
  }
];

var input = document.getElementById("search_input");
var list = document.getElementById("result_list");
var noResult = document.getElementById("no_result");
var firstMatch = null;

function goToChart(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center" });
  input.value = "";
  showResults("");
}

function showResults(word) {
  word = word.toLowerCase().trim();
  list.innerHTML = "";
  firstMatch = null;
  var count = 0;

  charts.forEach(function (c) {
    var allText = (c.idiom + " " + c.title + " " + c.keywords).toLowerCase();
    if (word === "" || allText.indexOf(word) === -1) return;
    count++;
    if (firstMatch === null) firstMatch = c.id;

    var li = document.createElement("li");
    var btn = document.createElement("button");
    btn.className = "result_item";

    var name = document.createElement("strong");
    name.textContent = c.idiom;

    var title = document.createElement("span");
    title.textContent = c.title;

    btn.append(name, title);
    btn.addEventListener("click", function () {
      goToChart(c.id);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });

  noResult.hidden = count > 0 || word === "";
}

input.addEventListener("input", function () {
  showResults(input.value);
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && firstMatch !== null) {
    goToChart(firstMatch);
  }
});

showResults("");