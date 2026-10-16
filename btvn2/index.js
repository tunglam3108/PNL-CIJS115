//Câu 1
export function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//Câu 2
export function countOccurrences(arr, number) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            count++;
        }
    }
    return count;
}

//Câu 3
export function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

//Câu 4
export function flattenArray(arr) {
    return arr.flat();
}

//Câu 5
export function isSymmetric(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

//Câu 6
export function findSecondLargest(arr) {
    let numbers = [...new Set(arr)];
    numbers.sort((a, b) => b - a);
    return numbers[1];
}

console.log(findSecondLargest([3, 1, 4, 2, 4]));

//Câu 7
// function sortProductsByPrice(products) {
//     return products.sort((a, b) => a.price - b.price);
// }

// let products = [
//     { name: 'Product A', price: 30 },
//     { name: 'Product B', price: 20 },
//     { name: 'Product C', price: 50 }
// ];

// console.log(sortProductsByPrice(products));

//Câu 8
function findMostExpensiveProduct(products) {
    return products.reduce((max, product) =>
        product.price > max.price ? product : max
    );
}

let products = [
    { name: 'Product A', price: 30 },
    { name: 'Product B', price: 20 },
    { name: 'Product C', price: 50 }
];

console.log(findMostExpensiveProduct(products));

//Câu 10
export function isSubset(arr1, arr2) {
    return arr2.every(item => arr1.includes(item));
}

//Câu 11
export function findMaxKey(obj) {
    return Object.keys(obj).reduce((maxKey, key) =>
        obj[key] > obj[maxKey] ? key : maxKey
    );
}

let obj = { a: 10, b: 20, c: 15 };
console.log(findMaxKey(obj)); 

//Câu 12
function mergeObjectsSumValues(obj1, obj2) {
    let result = { ...obj1 };

    for (let key in obj2) {
        if (result[key] !== undefined) {
            result[key] += obj2[key];
        } else {
            result[key] = obj2[key];
        }
    }
    return result;
}
console.log(mergeObjectsSumValues(
    { a: 10, b: 20 },
    { b: 30, c: 40 }
));

//Câu 13
function countElements(arr) {
    let result = {};
    for (let item of arr) {
        if (result[item]) {
            result[item]++;
        } else {
            result[item] = 1;
        }
    }
    return result;
}
console.log(countElements(['a', 'b', 'a', 'c', 'b', 'a']));

//Câu 15
export function hasDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}

//Câu 17
export function uniqueValues(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

//Câu 19
export function findLongestString(arr) {
    let longest = arr[0];

    for (let item of arr) {
        if (item.length > longest.length) {
            longest = item;
        }
    }
    return longest;
}

//Câu 20 
export function intersection(arr1, arr2) {
    return [...new Set(arr1.filter(item => arr2.includes(item)))];
}

//Câu 21
export function filterByMinValue(arr, minValue) {
    return arr.filter(item => item >= minValue);
}

//Câu 24
function getAdults(people) {
    return people.filter(person => person.age >= 18);
}
let people = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 16 },
    { name: 'David', age: 22 }
];
console.log(getAdults(people));

//Câu 25
export function convertToArray(obj) {
    return Object.entries(obj);
}

//Câu 26
export function sortStringsByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
















