let btn = document.getElementById('convert');
let volume = document.getElementById('volume-value');
let mass = document.getElementById('mass-value');
let length = document.getElementById('length-value');

btn.addEventListener('click', () => {
    const num = document.getElementById('input').value;
    lengthConvert(num);
    volumeConvert(num);
    massConvert(num);
})

function lengthConvert(num){
    let meters = num * 3.28084;
    let feet = num * 0.3048;
    length.textContent = `${num} meters = ${meters.toFixed(2)} feet | ${num} feet = ${feet.toFixed(2)} meters`;
}

function volumeConvert(num){
    let liters = num * 0.264172;
    let gallons = num * 3.78541;
    volume.textContent = `${num} liters = ${liters.toFixed(2)} gallons | ${num} gallons = ${gallons.toFixed(2)} liters`;
}

function massConvert(num){
    let kilograms = num * 0.453592;
    let pounds = num * 2.20462;
    mass.textContent = `${num} kilograms = ${pounds.toFixed(2)} pounds | ${num} pounds = ${kilograms.toFixed(2)} kilograms`;
}