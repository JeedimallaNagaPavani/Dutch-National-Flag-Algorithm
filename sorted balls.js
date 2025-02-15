// script.js

function sortBalls() {
    // Get the user input (array of balls) and convert it to an array
    let input = document.getElementById("inputArray").value;
    let arr = input.split(',').map(ball => ball.trim());

    let low = 0,
        mid = 0,
        high = arr.length - 1;

    // Sorting using Dutch National Flag Algorithm
    while (mid <= high) {
        if (arr[mid] === 'R') {
            // Swap arr[low] and arr[mid], then move both pointers
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++;
            mid++;
        } else if (arr[mid] === 'B') {
            // Swap arr[mid] and arr[high], then move high pointer
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        } else {
            // If it's 'G', just move mid pointer
            mid++;
        }
    }

    // Display the sorted balls array in the result paragraph
    document.getElementById("result").textContent = "Sorted Balls: " + arr.join(", ");
}