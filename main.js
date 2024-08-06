// -----------------------------------------Masalalar-----------------------------------------------------


// 1-question

// function fillArray(arr, count) {
//     if (count === 0) {
//         return arr;
//     }
//     let randomNum = Math.floor(Math.random() * 100); 
//     arr.push(randomNum);
//     return fillArray(arr, count - 1);
// }

// function findMax(arr, index, max) {
//     if (index === arr.length) {
//         return max;
//     }
//     if (arr[index] > max) {
//         max = arr[index];
//     }
//     return findMax(arr, index + 1, max);
// }

// let myArray = fillArray([], 5);
// console.log("Array:", myArray);

// let max = findMax(myArray, 0, myArray[0]);
// console.log("Eng katta qiymat:", max);

// 1-question

// 2-question


// const arr1 = [5, 6, true, null, 8];
// const arr2 = [0, 2, 5, false, 6];

// const combinedArray = arr1.concat(arr2);

// const sum = combinedArray.reduce((accumulator, currentValue) => {
//     if (typeof currentValue === 'number') {
//         return accumulator + currentValue;
//     }
//     return accumulator;
// }, 0);

// console.log("Birlashtirilgan array:", combinedArray);
// console.log("Raqamli elementlar yig'indisi:", sum);

// 2-question


// 3-question

// const numbers = [3, 5, 1, 9, 2];
// function findMinIndex(arr) {
//     if (arr.length === 0) {
//         return -1;
//     }

//     let minIndex = 0; 
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minIndex]) {
//             minIndex = i; 
//         }
//     }
//     return minIndex;
// }

// const minIndex = findMinIndex(numbers);

// console.log("Eng kichik elementning indeksi:", minIndex);

// 3-question


// 4-question   !!!!!!!!!!!!!!!!!!!!!!!!!!!!RASMDA 4-SAVOL BERILMAGAN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// 5-question


// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];

// let combinedArray = arr1.concat(arr2);

// combinedArray.sort((a, b) => a - b);

// console.log("Birlashtirilgan va tartiblangan array:");
// console.log(combinedArray);


// 5-question


// 6-question

// let carsArr = [
//     { name: "Lasetti", price: 9000 },
//     { name: "Damas", price: 7800 },
//     { name: "Cobalt", price: 12500 },
//     { name: "Gentra", price: 14000 },
//     { name: "Onix", price: 1700 }
// ];

// let sortedByName = carsArr.slice().sort((a, b) => {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// });

// let sortedByPrice = carsArr.slice().sort((a, b) => a.price - b.price);

// console.log("Name bo'yicha tartiblangan:");
// console.log(sortedByName);

// console.log("Price bo'yicha tartiblangan:");
// console.log(sortedByPrice);


// 6-question