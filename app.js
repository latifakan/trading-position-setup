const button = document.querySelector("#calcButton");
const risk = document.getElementById("risk");
const entry = document.getElementById("entry");
const slPrice = document.getElementById("sl-price");
const makerFee = document.getElementById("maker");
const takerFee = document.getElementById("taker");
const cryptoCoin = document.getElementById("crypto-coin");

let posCrypto = document.getElementById("pos-size-crypto");
let posDollar = document.getElementById("pos-size-dollar");
let fees = document.getElementById("fees");
let feesTotal = document.getElementById("fees-total");
let chosenCrypto = document.getElementById("chosen-crypto");

cryptoCoin.addEventListener("change", function (e) {
  const getValue = e.target.value;
  if (getValue === "BTC") {
    chosenCrypto.textContent = "\u20BF";
  } else if (getValue === "SOL") {
    chosenCrypto.textContent = "SOL";
  } else {
    chosenCrypto.textContent = "?";
  }
  console.log("target =", getValue);
});

button.addEventListener("click", () => {
  const calcPosCrypto = risk.value / (entry.value - slPrice.value);
  posCrypto.value = parseFloat(calcPosCrypto.toFixed(4));

  const calcPosDollar = entry.value * calcPosCrypto;
  posDollar.value = parseFloat(calcPosDollar.toFixed(2));

  const calcFees =
    (calcPosDollar * makerFee.value + calcPosDollar * takerFee.value) / 100;
  fees.value = parseFloat(calcFees.toFixed(4));

  const calcFeesTotal = parseFloat(risk.value) + parseFloat(calcFees);
  feesTotal.value = parseFloat(calcFeesTotal.toFixed(4));
});
