function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function describeTemperature(fahrenheit) {
    let celsius = convertToCelsius(fahrenheit);
    let temperature;
    if (celsius < 0) {
        temperature = 'very cold';
    } else if (celsius < 20) {
        temperature = 'cold';
    } else if (celsius < 30) {
        temperature = 'warm';
    } else if (celsius < 40) {
        temperature = 'hot';
    } else {
        temperature = 'very hot';
    }
    return fahrenheit + ' fahrenheit is ' + celsius.toFixed(2) + ' celsius, which is ' + temperature + '.';
}

function response() {
    alert(describeTemperature(document.getElementById('temp').value));
}