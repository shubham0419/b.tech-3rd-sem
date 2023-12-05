function downloadFile(url, downloaded) {
    console.log(`file has started to download from ${url}`);
    setTimeout(() => {
        var path = url.split('/').pop();
        downloaded(path);
    }, 2000);

}
// Compressing

function compressFile(path, compressed) {
    console.log(`the file ${path} has started to compress`);
    setTimeout(() => {
        var compressedPath = path.split('.')[0] + '.zip';
        compressed(compressedPath);
    }, 3000);
}
// upload
function uploadFile(compressedPath, uploaded) {
    console.log(`the file has started to upload as ${compressedPath}`);

    setTimeout(() => {
        uploaded(compressedPath);
    }, 3000);
}

downloadFile('https://localstorage/profile.jpg', function (path) {
    console.log(`the file has been downloaded successfully as ${path}`);
    compressFile(path, function (compressedPath) {
        console.log(`file has been compressed successfully as ${compressedPath}`);
        uploadFile(compressedPath, function () {
            console.log(`the file has been uploaded successfully as ${compressedPath}`);
            console.log(`Everything Done`);
        });
    });
}); 