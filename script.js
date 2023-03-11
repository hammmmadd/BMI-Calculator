window.calculateBMI = function calculateBMI() {
    let heightInputFeet = document.getElementById("heightInputFeet").value;
    let heightInputInch = document.querySelector("#heightInputInch").value;

    let weightInputKg = document.querySelector("#weightInputKg").value;

    heightInputFeet = parseInt(heightInputFeet);
    heightInputInch = parseInt(heightInputInch);

    heightInputInch += heightInputFeet * 12;

    let heightInMeter = (heightInputInch * 2.54) / 100;

    let heightInMeterSq = heightInMeter * heightInMeter;

    let bodyMassIndex = weightInputKg / heightInMeterSq;

    let idealWeight = 22 * heightInMeterSq;

    let weightToLose = (weightInputKg - idealWeight).toFixed(2);
    let weightToGain = (idealWeight - weightInputKg).toFixed(2);

    let suggestion = "You are ";

    if (bodyMassIndex > 30) {
        suggestion += `obese. you need to lose ${weightToLose}kg.`;

    } else if (bodyMassIndex > 25) {
        suggestion += `overweight. you need to lose ${weightToLose}kg.`;

    } else if (bodyMassIndex > 18.5) {

        if (bodyMassIndex > 22) {
            suggestion += `normal but optionally you may lose ${weightToLose} indexes to become ideally fit.`
        } else if (parseInt(bodyMassIndex) === 22) {
            suggestion += `perfectly Fit`
        } else {
            suggestion += `normal but optionally you may gain ${weightToGain} indexes to become ideally fit.`
        }

    } else {
        suggestion += `underweight. you are supposed to gain ${weightToGain}kg to become normal.`
    }


    console.log("index: ", bodyMassIndex);
    console.log("title: ", title);
    console.log("idealWeight: ", idealWeight);


    document.querySelector("#title").innerHTML = `Ideal weight: ${(idealWeight).toFixed(2)}kg`
    document.querySelector("#suggestion").innerHTML = suggestion;









}