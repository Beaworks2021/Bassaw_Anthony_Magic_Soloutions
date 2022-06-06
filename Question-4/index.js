let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let ghs = document.getElementById("GHS").value;
  let gbp = document.getElementById("GBP");
  let cny = document.getElementById("CNY");
  let cusd = document.getElementById("CUSD");
  let ausd = document.getElementById("USD");

  ausd.value = ghs / 6.05;
  cusd.value = (ghs / 6.05) * 6.46;
  gbp.value = (ghs / 6) * 0.73;
  cny.value = (ghs / 6.05) * 1.26;
});
