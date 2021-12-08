// //callback

// function persiapan() {
//         console.log("Persiapan...")
// }

// function rebusAir() {
//         console.log("Rebus Air...")
// }

// function masak() {
//         console.log("Masak...")
//         console.log("Selesai...")
// }

// //panggil terus
// function main() {
//     setTimeout(() => {
//         persiapan();

//     setTimeout(() => {
//         rebusAir();

//     setTimeout(() => {
//         masak();
//         },5000);
//     },7000);
//     },3000);
// }

// main();

//promise dan async await

function persiapan() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Persiapan...");
        }, 3000);
    })
}

function rebusAir() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Rebus Air...");
        }, 7000);
    })
}

function masak() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Masak... Selesai");
        }, 7000);
    })
}

//promise

// function main() {
//     persiapan()
//     .then(function(result) {
//         console.log(result);
//         return rebusAir();
//     })
//     .then(function(result) {
//         console.log(result);
//         return masak();
//     })
//     .then(function(result) {
//         console.log(result);
//     })
//     .catch(function(result) {
//         console.log(result);
//     })
// }

//async await
async function main() {
    console.log(await persiapan()); //await hanya bisa didalam function
    console.log(await rebusAir());
    console.log(await masak());
}

main();