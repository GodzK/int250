function convertTemperature() {
    let c = document.getElementById("celsius").value;
    if (c === "") {
        alert("Please enter a number for Celsius");
        return;
    }

    let f = (parseFloat(c) * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = f.toFixed(2);
}

function convertWeight() {
    let k = document.getElementById("kilo").value; 
    if (k === "") {
        alert("Please enter a number for Kilograms");
        return;
    }

    let p = parseFloat(k) * 2.205;
    document.getElementById("pounds").value = p.toFixed(2);
}

function convertDistance() {
    let km = document.getElementById("km").value;  
    if (km === "") {
        alert("Please enter a number for Kilometers");
        return;
    }

    let m = parseFloat(km) / 1.609;
    document.getElementById("miles").value = m.toFixed(2);
}