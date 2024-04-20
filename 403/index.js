// создать функцию фибоначчи


function fibonaci(number) {
    let a = 0,
    b = 1, 
    c;

    if (number <= 1) {
        return number;
    }
    for (let i = 2; i <= number; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Пример 
console.log(fibonaci(9)); 


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// написать алгоритм bubbleStort

function bubbleSort(arr) {
    let lenght = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < lenght - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

// Пример 
console.log(bubbleSort([34, 7, 23, 32, 5, 62])); // Выводит [5, 7, 23, 32, 34, 62]

