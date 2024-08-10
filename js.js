/*ini js*/
function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight > 0 && height > 0) {
        var bmi = weight / (Math.pow(height / 100, 2));
        document.getElementById("bmiValue").innerText = bmi.toFixed(1);
        
        var category = "";
        if (bmi < 18.5) {
            category = "Berat Badan Kurang";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Berat Badan Ideal";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Berat Badan Lebih";
            document.getElementById("suggestion").style.display = "block";
        } else {
            category = "Obesitas";
            document.getElementById("suggestion").style.display = "block";
        }
        
        document.getElementById("bmiCategory").innerText = "Anda memiliki " + category;
        document.getElementById("downloadBtn").style.display = "block";
    } else {
        alert("Please enter a valid height and weight!");
    }
}
