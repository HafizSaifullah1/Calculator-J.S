var displayInp = document.getElementById("displayInp");

function getBtnValue(val) {
  displayInp.value += val;
}

function calculateVal() {
  var Val = displayInp.value;
  var ans = eval(Val);
  displayInp.value = ans;
}

function clearVal() {
  displayInp.value = "";
}
