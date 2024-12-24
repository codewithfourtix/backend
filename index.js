//file system in nodeJS

let fs = require("fs");

//copyfile
//write file
// append file
// unlink file
// rename file

//i just increased the complexity to ensure that i know javascript
const fileCreater = (name, data) => {
  fs.writeFile(`${name}.txt`, `${data}`, (err) => {
    if (err) return console.log(err);
    else return console.log("done");
  });
};

// let code = prompt("Press 1 to create file: ");
let code = 1;
if (code == 1) {
  // let name = prompt("Enter the name of file: ");
  let name = "monotonic";
  // let data = prompt("Input some data : ");
  let data = "Hey i am monotonic. Your new ai helper . ";
  fileCreater(name, data);
  appendFile();
  renameFile();
  copyFile();
  deleteFile();
  deleteFolder();
} else {
  console.log("Wrong choice: ");
}

function appendFile() {
  fs.appendFile("monotonic.txt", " Do you need any help?", function (err) {
    if (err) console.log(err);
    else console.log("done");
  });
}

function renameFile() {
  fs.rename("monotonic.txt", "monoditri.txt", function (err) {
    if (err) console.log(err);
    else console.log("done");
  });
}

function copyFile() {
  // 1. The file's content that you want to copy
  // 2. The destination
  // 3 callback
  fs.copyFile("mono.txt", "monoditri.txt", function (err) {
    if (err) console.log(err);
    else console.log("done");
  });
}

function deleteFile() {
  fs.unlink("mono.txt", function (err) {
    if (err) console.log(err.message);
    else console.log("done");
  });
}

//to remove a folder
function deleteFolder() {
  fs.rmdir("./exp", { recursive: true }, function (err) {
    if (err) console.log(err.message);
    else console.log("done");
  });
}
