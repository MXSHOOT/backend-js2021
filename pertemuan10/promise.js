const download = new Promise(function (resolve, reject) {
    setTimeout(() => {
        const status = true; //true download berhasil dan false download gagal
        
        if(status) {
            resolve("Download Berhasil");
        } else {
            reject("Download Gagal");
        }
    }, 3000);
});

download
.then(function(result) { 
    console.log(result)
})
.catch(function(result) {
    console.log(result)
})