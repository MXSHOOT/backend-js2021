function formatName(nama) {
    const result = nama.toUpperCase();//toUppeCase huruf kapital, kalau toLower kecil
    return result;
}

function getName(nama, callFormatName) {
    const result = callFormatName(nama);
    console.log(result);
}

getName("Faris", formatName);