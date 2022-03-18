const files = [
    "file1.asd",
    "file2.bat",
    "music.xlsx",
    "downloads.abc"
];

const checkForFileExtension = (files, extension) => {

    const hasSearchedExtension = files.some((file) => {
        return file.slice(file.lastIndexOf(".")) === "." + extension;
    })

    if (hasSearchedExtension) {
        console.log("detected virus");
    } else {
        console.log("no virus detected");
    }

}

checkForFileExtension(files, "bat");