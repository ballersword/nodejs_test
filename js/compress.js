var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('../txt/input.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('../txt/input.txt.gz'));//链式操作
  
  
// 解压 input.txt.gz 文件为 input.txt
// fs.createReadStream('input.txt.gz')
//   .pipe(zlib.createGunzip())
//   .pipe(fs.createWriteStream('input.txt'));

  
console.log("文件压缩完成。");