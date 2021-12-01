/**
 //function declaration
function hitungLuas(jari) {
    const hasil = 3.14 * jari * jari;
    
    return hasil;
}
 */

/*
//function expression
const hitungLuas = function(jari){
    const hasil = 3.14 * jari * jari;
    
    return hasil;
}*/

//Arrow Funstion
// bisa satu baris seperti ini const hitungLuas = (jari) => const hasil = 3.14 * jari * jari;
// syaratnya hanya satu return saja
const hitungLuas = (jari) => {
    const hasil = 3.14 * jari * jari;
    
    return hasil;
}

console.log(hitungLuas(5));
console.log(hitungLuas(7));