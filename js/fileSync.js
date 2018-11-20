var fs=require("fs");

//阻塞代码
// var data = fs.readFileSync("../txt/input.txt");
// console.log(data.toString());

//非阻塞代码
fs.readFile('../txt/input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("结束");