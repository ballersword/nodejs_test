var events =require("events");

var eventEmitter = new events.EventEmitter();// 创建 eventEmitter 对象

var connectHandler =function connected(){
	console.log("连接成功");
	eventEmitter.emit("data_received");// 触发事件
}
eventEmitter.on('connection', connectHandler);// 绑定事件及事件的处理程序
eventEmitter.on('data_received', function(){
   console.log('数据接收成功。');
});

eventEmitter.emit('connection');
console.log("程序执行完毕。");



