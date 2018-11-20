var fs = require("fs");

// 创建一个可读流
var inStream = fs.createReadStream('../txt/a.txt');

// 创建一个可写流
var outStream = fs.createWriteStream('../txt/b.txt');

// 管道读写操作
// 读取 a.txt 文件内容，并将内容写入到 b.txt 文件中
inStream.pipe(outStream);

console.log("程序执行完毕");