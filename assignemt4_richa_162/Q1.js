function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function digitGatekeeper() {
    let L = parseInt(prompt("Enter L:"));
    let R = parseInt(prompt("Enter R:"));
    let K = parseInt(prompt("Enter K:"));
    let count = 0;

    for (let x = L; x <= R; x++) {
        if (x % K === 0 && !x.toString().includes("0")) {
            let sum = x.toString().split("").reduce((a, b) => a + parseInt(b), 0);
            if (isPrime(sum)) count++;
        }
    }
    alert(count);
}
