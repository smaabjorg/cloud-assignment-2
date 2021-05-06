var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080');
var json2xml = require('json2xml');

var data = 
{"Data":
    {"SOM":
        {"Tab":
        [
            {"Values":
                {"ExpandedValues":null,
                "ID":"msorgrole"},
                "ID":"OrgRole"},
            {"Values":
                {"ExpandedValues":null,
                "ID":"msorg"},
                "ID":"Organization"}
            ]
        }
    }
};

var topic = '';

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


//getRndInteger(-25, 55).toString();
var message = json2xml(data);
client.on('connect',()=>{
    setInterval(()=>{
        client.publish(topic,message)
        console.log('message sent',message)
    },5000)
})