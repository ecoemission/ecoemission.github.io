<!DOCTYPE html>
<html>
  <head>
    <title>Carbon Footprint Calculator</title>
  </head>
  <body>
    <h1>Carbon Footprint Calculator</h1>
    <form>
      <label for="electricity">Electricity usage (kWh per month):</label>
      <input type="number" id="electricity"><br>

      <label for="gas">Natural gas usage (therms per month):</label>
      <input type="number" id="gas"><br>

      <label for="mileage">Mileage (miles per month):</label>
      <input type="number" id="mileage"><br>

      <button type="button" onclick="calculateFootprint()">Calculate</button>
    </form>

    <h2>Your Carbon Footprint: <span id="result"></span></h2>
    <p id="advice"></p>

    <script src="script.js"></script>
  </body>
</html>
function calculateFootprint() {
  const electricity = document.getElementById("electricity").value;
  const gas = document.getElementById("gas").value;
  const mileage = document.getElementById("mileage").value;

  const electricityCarbon = electricity * 0.0006; // 0.6 lbs of CO2 per kWh
  const gasCarbon = gas * 11.7; // 11.7 lbs of CO2 per therm
  const mileageCarbon = mileage * 0.404; // 0.404 lbs of CO2 per mile

  const totalCarbon = electricityCarbon + gasCarbon + mileageCarbon;
  document.getElementById("result").innerText = totalCarbon.toFixed(2) + " lbs of CO2 per month";

  if (totalCarbon > 100) {
    document.getElementById("advice").innerText = "Your carbon footprint is high. Consider reducing your electricity usage, driving less or using public transport, and eating a plant-based diet.";
  } else {
    document.getElementById("advice").innerText = "Your carbon footprint is relatively low. Keep up the good work!";
  }
}









