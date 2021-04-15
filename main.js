// document.body.innerHTML = '<h1>Hello</h1>'

///////////Date
function daysIntoYear(date) {
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}
let d = new Date();
const dayNumber = daysIntoYear(d);

//////////////Progress Bar
let fexContainer = document.getElementById("flex-container");

for (let i = 0; i < 365; ++i) {
  let div = document.createElement("div");
  if (i <= dayNumber) {
    div.style.backgroundColor = "black";
  }
  fexContainer.appendChild(div);
}

//// Timer Bars
// const button = document.querySelector("#restart-button");
const bars = document.querySelectorAll(".round-time-bar");
// button.addEventListener("click", () => {
//   bars.forEach((bar) => {
//     bar.classList.remove("round-time-bar");
//     bar.offsetWidth;
//     bar.classList.add("round-time-bar");
//   });
// });

// chrome.browserAction.onClicked.addListener(function () {
//   chrome.tabs.create({ url: "chrome://newtab" });
// });
/////Quotes
// fetch("https://stoic-server.herokuapp.com/random")
//   .then((data) => data.json())
//   .then((data) => {
//     // console.log(data[0].body);
//     let lines = document.createElement("div");
//     lines.innerHTML = '"' + data[0].body + '"';
//     lines.style.fontSize = "20px";
//     let author = document.createElement("div");
//     author.innerHTML = data[0].author;
//     author.style.fontSize = "17px";
//     author.style.fontWeight = "bold";

//     document.getElementById("quotes").appendChild(lines);
//     document.getElementById("quotes").appendChild(author);
//   });

const getQuotes = async () => {
  const response = await fetch("https://stoic-server.herokuapp.com/random");
  const data = await response.json();
  if (data[0].body.length > 200) {
    return getQuotes();
  }
  return data;
};

getQuotes().then((data) => {
  let lines = document.createElement("div");
  lines.innerHTML = '"' + data[0].body + '"';
  lines.style.fontSize = "18px";
  let author = document.createElement("div");
  author.innerHTML = data[0].author;
  author.style.fontSize = "18px";

  document.getElementById("quotes").appendChild(lines);
  document.getElementById("quotes").appendChild(author);
});
