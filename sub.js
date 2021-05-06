var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080')
var topic = 'Smart Home'
client.on('message', (topic,message)=>{
 message = message.toString()
/*  console.log(message) */
})
client.on('connect',()=>{
 client.subscribe(topic)
})


//Modify the subscriber file, add these lines
 const xml2js = require('xml2js');
client.on('message', (topic,message)=>{
const xml = message.toString()
xml2js.parseString(xml, (err, result) => {
 
    if(err) {
 throw err;
 } // `result` is a JavaScript object. convert it to a JSON string
 const json = JSON.stringify(result, null, 4);
 console.log(json);
});
}) 