// Câu 1
function sanPham(name, price) {
    return `Sản phẩm: ${name}, Giá: ${price.toLocaleString("vi-VN")} VNĐ`;
}
console.log(sanPham("Sách", 20000));

// Câu 2
function greet(name) {
    return `Xin chào, ${name}!`;
}

console.log(greet("Lam"));

// Câu 3
function tongSo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(tongSo(3));

// Câu 4
function binhPhuong(n) {
    return n * n;
}
console.log(binhPhuong(6));

// Câu 5
function chanLe(n) {
    return n % 2 === 0;
}
console.log(chanLe(7));

// Câu 6
function dauTien(arr) {
    return arr[0];
}
console.log(dauTien([1, 2, 3]));

// Câu 7
function restOperator (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(restOperator([1, 2, 3, 4, 5]));

// Câu 10
function lengthOfString(str) {
    return str.length;
}
console.log(lengthOfString("Hello, World!"));

// Câu 11
function inHoa(str) {
    return str.toUpperCase();
}
console.log(inHoa("javascript"));

// Câu 12

function tienVn(number) {
    return number.toLocaleString("vi-VN") + " VNĐ";
}
console.log(tienVn(1000000));

// Câu 13
function max(arr) {
    return Math.max(...arr);
}
console.log(max([10, 5, 20, 8]));

// Câu 14
// Câu 15
function repeatString(str, n) {
    return Array(n).fill(str).join(" ");
}
console.log(repeatString("Hello", 3));

// Câu 16
function sumOdd(n) {
    let sum = 0;
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}
console.log(sumOdd(4));

// Câu 17
function sumGreaterThan (arr, threshold) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumGreaterThan([1, 2, 3, 4, 5, 6], 3));

//Câu 18
export function fromDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}

// Câu 19
function firstThree(arr) {
    return arr.slice(0, 3);
}
console.log(firstThree([1, 2, 3, 4, 5]));

// Câu 20
export const contantChu = (str, char) => str.includes(char)

// Câu 21
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2], [3, 4]));

// Câu 22
function countOccurrences(arr, number) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2));

// Câu 23
function filterOdd(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterOdd([1, 2, 3, 4]));

// Câu 24
function greaterThan(arr,greater) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > greater) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(greaterThan([1, 2, 3, 4, 5, 6], 3));

//Câu 25
export function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Câu 28
function sumEvenIndex(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0){
            sum += arr[i]
        }
    }
    return sum
}
console.log(sumEvenIndex([1, 2, 3, 4, 5, 6]));

// Câu 29
function multiplyByTwo(arr) {
    let result = [];
    for (let i = 0; i <= arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}
console.log(multiplyByTwo([1, 2, 3]));