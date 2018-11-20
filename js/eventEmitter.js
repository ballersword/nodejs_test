//event.js 文件
var EventEmitter = require('events').EventEmitter; 
var event = new EventEmitter(); 
event.on('some_event', function() { 
    event.emit('some_event_2'); 
    console.log('some_event 事件触发'); 
}); 
event.on('some_event_2', function() { 
    console.log('some_event_2 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event'); 
}, 2000); 










