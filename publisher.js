var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = ''
var message = "Hello"
client.on('connect',()=>{
 setInterval(()=>{
 client.publish(topic,message)
 console.log('message sent',message)
 },5000)
})