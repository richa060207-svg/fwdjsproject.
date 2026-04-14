function isPalindrome(num) {
    let s = num.toString();
    return s === s.split("").reverse().join("");
}

function mirrorCorridor() {
    let N = parseInt(prompt("Enter N:"));
    let K = parseInt(prompt("Enter K:"));

    for (let X = 0; X <= 100000; X++) {
        let val = N + X;
        if (isPalindrome(val) && val % K === 0) {
            alert(X);
            return;
        }
    }
    alert(-1);
}
