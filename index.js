const express = require('express');
var path = require('path');
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const app      = express();
const port = process.env.PORT || 3000;
//const router = require('./routes/routes');
var mqtt=require('mqtt');

app.set('view engine', 'ejs');
app.use(express.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.resolve(__dirname, "views/pages"));
app.use(express.static('public'));

app.get(
    '/',(req, res) => {
        res.render('index')
    });


var client = mqtt.connect("mqtt://test.mosquitto.org",{clientId:"mqttjs01"});

client.on("connect",function(){	
    console.log("connected");
});


var mqtt    = require('mqtt');
var count =0;
var client  = mqtt.connect("mqtt://192.168.1.157",{clientId:"mqttjs01"});
console.log("connected flag  " + client.connected);

//handle incoming messages
client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});


client.on("connect",function(){	
console.log("connected  "+ client.connected);

})
//handle errors
client.on("error",function(error){
console.log("Can't connect" + error);
process.exit(1)});
//publish
function publish(topic,msg,options){
console.log("publishing",msg);

if (client.connected == true){
	
client.publish(topic,msg,options);

}
count+=1;
if (count==2) //ens script
	clearTimeout(timer_id); //stop timer
	client.end();	
}

//////////////

var options={
retain:true,
qos:1};
var topic="testtopic";
var message="test message";
var topic_list=["topic2","topic3","topic4"];
var topic_o={"topic22":0,"topic33":1,"topic44":1};
console.log("subscribing to topics");
client.subscribe(topic,{qos:1}); //single topic
client.subscribe(topic_list,{qos:1}); //topic list
client.subscribe(topic_o); //object
var timer_id=setInterval(function(){publish(topic,message,options);},5000);
//notice this is printed even before we connect
console.log("end of script");

mongoose.connect('mongodb+srv://simencloud:elskerntnu@cluster0.5o3zb.mongodb.net/IoTDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', () => {'Error connecting to the database'});
db.on('open', () => {console.log("We have connection to database")});
app.listen(port, () => console.log(`Express server listening on port ${port}`));