// Konversi string
let num = 100
let str = String(num)
console.log(str); // output = 100
console.log(typeof str); // output = string

let bool = true
console.log(bool.toString()); // output = true

// Konversi ke Number
let star = "123"
let numa = Number(star)
console.log(numa); // output = 123
console.log(typeof numa); // output = number

let floatStr = "45.34"
console.log(parseInt(floatStr)); // output = 45.34
console.log(parseFloat(floatStr)); // output = 45

// Konversi ke Boolean
let boal = Boolean("")
console.log(boal, typeof boal); // output = false boolean

console.log(Boolean(0)); // output = false
console.log(Boolean("")); // output = false
console.log(Boolean(null)); // output = true 
console.log(Boolean(123)); // output = true 
console.log(Boolean("hello")); // output = true
