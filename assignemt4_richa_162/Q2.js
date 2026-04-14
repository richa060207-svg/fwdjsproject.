function rollSeedLock() {
    let N = parseInt(prompt("Enter N:"));
    let seed = parseInt(prompt("Enter seed:"));

    for (let i = 0; i < 3; i++) {
        if (N % 2 === 0) {
            N = N / 2 + seed;
        } else {
            N = N * 3 - seed;
        }
    }

    let str = N.toString();
    if (N >= 100 && N <= 999 && str[1] == seed) {
        alert("YES, " + N);
    } else {
        alert("NO, " + N);
    }
}
