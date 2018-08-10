function tipCalculate (){

  var billAmount = document.querySelector('#bill').value;
  var percentageTotal = document.getElementById('percentage').value;
  var totalPeople = document.querySelector('#people').value;

  if (billAmount === "" || percentageTotal == 0) {
    alert("Please enter values");
    return;
  }


  var tip = billAmount * (percentageTotal * .01);
  tip = tip.toFixed(2);

  var eachTip = tip / totalPeople;

  document.getElementById("totalTips").style.display = "block";
  document.getElementById("finalTip").innerHTML = "$" + tip;
  document.getElementById("tipEach").innerHTML = "$" + eachTip;

}

document.getElementById("totalTips").style.display = "none";
document.getElementById("button").onclick = function() {
    tipCalculate();
  };
