// MQTT broker
var mosca = require('mosca')
var settings = { port: 8080 }
var broker = new mosca.Server(settings)
// MongoDB
var mongc = require('mongodb').MongoClient
var url = "mongodb+srv://simencloud:elskerntnu@cluster0.5o3zb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; // Our connection string to the DB. 
broker.on('ready', () => {
    console.log('Broker is ready!')
});

broker.on('published', (packet) => {
    message = packet.payload.toString()
    console.log(message)
    mongc.connect(url, (error, client) => {
        var myCol = client.db('IoT').collection('messages'); // DB name and collection name
        myCol.insertOne({
            message: message
        }, () => {
            console.log('Data is saved to MongoDB')
            client.close()
        })
    })
})