var events = require ('events');
var emitter = new events.EventEmitter();

emitter.on('connection',function(){
  console.log('connection');
  emitter.emit('data_received','hola');
});

emitter.on('data_received',function(p){
  console.log('data received %s',p);
});

emitter.emit('connection');
