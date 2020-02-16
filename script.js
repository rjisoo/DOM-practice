var body = document.body;
var newTable = document.createElement("table");
newTable.style.cssText = "border-collapse: collapse; font-size: 20px; margin-bottom: 20px;";

// create table header
var tableHead = document.createElement("thead");
var row = document.createElement("tr");
for (var i = 1; i < 5; i++) {
  var rowCell = document.createElement("th");
  rowCell.textContent = "Header " + (i);
  row.appendChild(rowCell);
}
tableHead.appendChild(row);
newTable.appendChild(tableHead);

// create table body
var tableBody = document.createElement("tbody");
for (var i = 1; i < 5; i++) {
  var row = document.createElement("tr");

  for (var j = 0; j < 4; j++) {
      var cell = document.createElement("td");
      cell.textContent = i + ", " + (j + 1);
      row.appendChild(cell);      
  }

  tableBody.appendChild(row);
}
newTable.appendChild(tableBody);
document.body.appendChild(newTable);


// make buttons
function makeButton(direction) {
  var newButton = document.createElement("button");
  newButton.id = direction.toLowerCase().split(' ').join('-') + '-button';
  newButton.textContent = direction;
  newButton.style = 'width: 100px; font-size: 20px; padding: 4px; margin: 2px;';
  return newButton
}

var buttonDiv = document.createElement("div");

buttonDiv.appendChild(makeButton('Up'))
buttonDiv.appendChild(makeButton('Left'))
buttonDiv.appendChild(makeButton('Right'))
buttonDiv.appendChild(document.createElement("br"));
buttonDiv.appendChild(makeButton('Down'))
buttonDiv.appendChild(document.createElement("br"));
buttonDiv.appendChild(makeButton('Mark Cell'))
document.body.appendChild(buttonDiv);

function toUp() {
  var selectedCell = document.getElementById("selected");
  var tempColIndex = selectedCell.cellIndex;
  var parentPrev = selectedCell.parentNode.previousElementSibling
  if (parentPrev) {
    var newSelected = parentPrev.firstElementChild;
    for (var i = 0; i < tempColIndex; i++) {
      newSelected = newSelected.nextElementSibling;
    }
    updateCell(selectedCell, newSelected)
  }
}

function toDown() {
  var selectedCell = document.getElementById("selected");
  var tempColIndex = selectedCell.cellIndex;
  var parentNext = selectedCell.parentNode.nextElementSibling

  if (parentNext) {
    var newSelected = parentNext.firstElementChild;
    for (var i = 0; i < tempColIndex; i++) {
      newSelected = newSelected.nextElementSibling;
    }
    updateCell(selectedCell, newSelected)
  }
}

function toLeft() {
  var selectedCell = document.getElementById("selected");
  if (selectedCell.previousElementSibling) {
    updateCell(selectedCell, selectedCell.previousElementSibling)
  }
}

function toRight() {
  var selectedCell = document.getElementById("selected");
  if (selectedCell.nextElementSibling) {
    updateCell(selectedCell, selectedCell.nextElementSibling)
  }
}

function updateCell(currentSelected, newSelected) {
  currentSelected.style.borderWidth = "1px";
  currentSelected.removeAttribute("id");
  newSelected.style.borderWidth = "3px";
  newSelected.id = "selected";
}

function markCell() {
  var selectedCell = document.getElementById("selected");
  if (selectedCell.style.background == "yellow") {
    selectedCell.style.background = "unset";
  } else {
    selectedCell.style.background = "yellow";
  }
}

document.getElementById("up-button").addEventListener("click", toUp);
document.getElementById("down-button").addEventListener("click", toDown);
document.getElementById("left-button").addEventListener("click", toLeft);
document.getElementById("right-button").addEventListener("click", toRight);
document.getElementById("mark-cell-button").addEventListener("click", markCell);
document.getElementById("mark-cell-button").style.marginTop = '20px';


// table css
var tdStyle = "width: 100px; border: 1px solid black; padding: 6px 0; text-align: center;"
var allThElm = document.body.getElementsByTagName("th");
var allTdElm = document.body.getElementsByTagName("td");

for(var i=0; i < allThElm.length; i++) {
  allThElm[i].style.cssText = tdStyle;
}

for(var i=0; i < allTdElm.length; i++) {
  allTdElm[i].style.cssText = tdStyle;
}

// selected cell style
var selectedIndex = 0;
var selectedCell = allTdElm[selectedIndex];

document.addEventListener("DOMContentLoaded", function(event) {
  selectedCell.id = "selected";
  selectedCell.style.borderWidth = "3px";
});
