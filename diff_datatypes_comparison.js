let a = "101";
let b = 101;
console.log(a == b); //true
console.log(typeof a); //string
console.log(typeof b); //number
console.log(a === b); //false


let c = null;
let d = undefined;
console.log(c == d); //true
console.log(typeof c); //object
console.log(typeof d); //undefined
console.log(c === d); //false


let e = "";
let f = null;
console.log(e == f); //false
console.log(typeof e); //string
console.log(typeof f); //object
console.log(e === f); //false



let g = false;
let h = 0;
console.log(g == h); //true
console.log(typeof g); //boolean
console.log(typeof h); //number
console.log(g === h); //false


let i = false;
let j = "";
console.log(i == j); //true
console.log(i === j); //false
console.log(typeof i); //boolean
console.log(typeof j); //string


let k = null;
let l = 0;
console.log(k == l); //false
console.log(k === l); //false
console.log(typeof k); //object
console.log(typeof l); //number



let m = undefined;
let n = 0;
console.log(m == n); //false
console.log(m === n); //false
console.log(typeof m); //undefined
console.log(typeof n); //number

let o = NaN;
let p = NaN;
console.log(o == p); //false
console.log(o === p); //false
console.log(typeof o); //number
console.log(typeof p); //number


let q = true;
let r = 1;
console.log(q == r);     // true
console.log(q === r);    // false
console.log(typeof q);   // boolean
console.log(typeof r);   // number


let s = [];
let t = false;
console.log(s == t);     // true (empty array == false after coercion)
console.log(s === t);    // false
console.log(typeof s);   // object
console.log(typeof t);   // boolean


let u = [];
let v = 0;
console.log(u == v);     // true (empty array == 0 after coercion)
console.log(u === v);    // false
console.log(typeof u);   // object
console.log(typeof v);   // number

let w = {};
let x = "[object Object]";
console.log(w == x);     // false
console.log(w === x);    // false
console.log(typeof w);   // object
console.log(typeof x);   // string
