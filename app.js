let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let storePassengers = " " + count + " - ";
  saveEl.textContent += storePassengers;
  count = 0;
  countEl.textContent = count;
}
