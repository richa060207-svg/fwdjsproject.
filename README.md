# fwdjsproject.
Q1 - Digit Gatekeeper
We check numbers between L and R. The number must be divisible by K, must not have a zero in it, and the sum of its digits should be a prime number. We count how many such numbers exist.
Goes through all numbers in the range, so it depends on how big R is.
Q2 - Roll‑Seed Lock
We start with a number N and a seed. For three steps, if the number is even we divide by 2 and add the seed, otherwise we multiply by 3 and subtract the seed. At the end, we check if the result is a three‑digit number and if the middle digit matches the seed.
Q3 - Mirror Corridor
We look for the smallest X such that N+X is both a palindrome and divisible by K. If we don’t find one within 100,000 tries, we return ‑1.
Q4 - Fare Calculator
We calculate the fare using the given rules: base fare plus distance cost, add extra if late, add 10% if distance is long, adjust with seed, and finally round up to the nearest multiple of 5.
Q5 - Skipping Numbers
We keep adding numbers starting from 1, but skip those divisible by (seed+2). We stop once the sum reaches at least N, and then show the last number added and the sum.
Q6 - Contest Score Judge
We calculate the score based on correct, partial, and wrong answers. If the score is negative, we reset it to 0. If the total number of answers is more than 50, we subtract 10. Finally, we check if the score is enough to pass (60 or more).
