// var x = new Promise((resolve, reject) => {
//     let num = Math.random();
//     console.log(num);
//     if (num < 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// })

// x.then(() => {
//     console.log(`Fullfill`);
// }).catch(() => {
//     console.log(`Reject`);
// })

// function fun() {
//     return new Promise((resolve, reject) => {
//         let num = Math.random();
//         console.log(num);
//         if (num < 0.5) {
//             resolve();
//         } else {
//             reject();
//         }
//     })
// }

// fun().then(() => {
//     console.log(`Fullfill`);
// }).catch(() => {
//     console.log(`Reject`);
// })

function downloadFile(url) {
    console.log(`file has started to download from ${url}`);

    return new Promise((resolve, reject) => {
        if (!url.startsWith('http')) {
            reject();
        }
        setTimeout(() => {
            var path = url.split('/').pop();
            resolve(path);
        }, 2000);
    })
}
// Compressing

function compressFile(path) {
    console.log(`the file has been downloaded successfully as ${path}`);
    console.log(`the file ${path} has started to compress`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var compressedPath = path.split('.')[0] + '.zip';
            resolve(compressedPath);
        }, 3000);
    })

}
// upload
function uploadFile(compressedPath) {
    console.log(`the file has been compressed successfully as ${compressedPath}`);
    console.log(`the file has started to upload as ${compressedPath}`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(compressedPath);
        }, 3000);
    })

}

// downloadFile('https://localstorage/profile.jpg')
//     .then((path) => {
//         console.log(`the file has been downloaded successfully as ${path}`);
//         compressFile(path)
//             .then((compressedPath) => {
//                 console.log(`the file has been compressed successfully as ${compressedPath}`);
//                 uploadFile(compressedPath)
//                     .then((compressedPath) => {
//                         console.log(`the file has been uploaded successfully as ${compressedPath}`);
//                         console.log(('Everything Done!!!'));
//                     })
//             })
//     }).catch(() => {
//         console.log(`Error`);
//     })


downloadFile('https://localstorage/profile.jpg')
    .then(compressFile)
    .then(uploadFile)
    .then((compressedPath) => {
        console.log(`the file has been uploaded successfully as ${compressedPath}`);
        console.log(('Everything Done!!!'));
    }).catch(() => {
        console.log('error');
    })