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

// Câu 11
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("javascript"));

// Câu 12

function formatCurrency(number) {
    return number.toLocaleString("vi-VN") + " VNĐ";
}
console.log(formatCurrency(1000000));

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


// Câu 20
export const contantChu = (str, char) => str.includes(char)

//Câu 18
export function fromDate(dateStr) {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
}

//Câu 25
export function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Câu 10
// export const