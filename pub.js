var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:8080');
var json2xml = require('json2xml');

// The data we are sending

var data =
{
    "Data":
    {
        "SOM":
        {
            "Tab":
                [
                    {
                        "Values":
                        {
                            "Type": "TemperatureSensor",
                            "Location": "Bedroom"
                        },
                        "Temperature": getRndInteger(0, 35),
                        "Unit": "Celcius"
                    },
                    {
                        "Values":
                        {
                            "Type": "TemperatureSensor",
                            "Location": "Garden"
                        },
                        "Temperature": getRndInteger(-25, 45),
                        "Unit": "Celcius"
                    },
                    {
                        "Values":
                        {
                            "Type": "SmokeSensor",
                            "Location": "Kitchen"
                        },
                        "Smokelevel": Math.floor(Math.random() * 100),
                        "Unit": "ISO"
                    },
                ]
        }
    }
};



var topic = 'Smart Home';

// This gets a random number to present in our sensors. 

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Transforms our data from JSON to XML. 

var message = json2xml(data);
client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message)
        console.log('message sent', message)
    }, 5000)
})