# Calculateur d'empreinte carbone

Consommation d'électricité (kWh par mois):
<input type="number" id="electricity"><br>

Consommation de gaz naturel (therms par mois):
<input type="number" id="gas"><br>

Kilomètres traversée (kilomètres par mois):
<input type="number" id="mileage"><br>

<button type="button" onclick="calculateFootprint()">Calcule</button>

Votre empreinte carbone: **<span id="result"></span>**

<div id="advice"></div>

<script>
  function calculateFootprint() {
    const electricity = document.getElementById("electricity").value;
    const gas = document.getElementById("gas").value;
    const mileage = document.getElementById("mileage").value;

    const electricityCarbon = electricity * 0.0006; // 0.6 lbs of CO2 per kWh
    const gasCarbon = gas * 11.7; // 11.7 lbs of CO2 per therm
    const mileageCarbon = mileage * 0.404; // 0.404 lbs of CO2 per mile

    const totalCarbon = electricityCarbon + gasCarbon + mileageCarbon;
    document.getElementById("result").innerText = totalCarbon.toFixed(2) + " livres de CO2 par mois";

    if (totalCarbon > 100) {
      document.getElementById("advice").innerText = "Votre empreinte carbone est élevée. Envisagez de réduire votre consommation d'électricité, de conduire moins ou d'utiliser les transports en commun et d'avoir une alimentation à base de plantes.";
    } else {
      document.getElementById("advice").innerText = "Votre empreinte carbone est relativement faible. Continuez votre bon travail!";
    }
  }
</script>
