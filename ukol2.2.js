
let a = Number(prompt ("Zadejte první číslo:"));
let b = Number(prompt ("Zadejte druhé číslo:"));
let c = Number(prompt ("Zadejte třetí číslo:"));


console.log ("Vaše zadaná čísla byla: " + a + ", " + b + ", " + c + ".");


if (a > b && a > c) {
console.log ("Největší hodnotou je první číslo : " + a + ".");

} else if (b > c && b > a) {

    console.log ("Největší hodnotou je druhé číslo: " + b + ".");

} else if (c > b && c > a) {
 
    console.log ("Největší hodnotou je třetí číslo: " + c + ".");
}
