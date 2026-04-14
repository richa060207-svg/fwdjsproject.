function roundUpTo5(num) {
    return Math.ceil(num / 5) * 5;
}

function fareCalculator() {
    let base = parseInt(prompt("Enter base:"));
    let distance = parseInt(prompt("Enter distance:"));
    let minutesLate = parseInt(prompt("Enter minutesLate:"));
    let seed = parseInt(prompt("Enter seed:"));

    let fare = base + 7 * distance;
    if (minutesLate > 15) fare += 20;
    if (distance > 10) fare += fare * 0.1;
    if (seed % 2 === 1) fare -= seed;
    else fare += seed;

    fare = roundUpTo5(fare);
    alert(fare);
}
