Hello and welcome to our assignment 2 in IDG 2001 Cloud Technologies.
To test our project, run npm install in the terminal open in the project folder.
This should install everything you need, then open three terminals in the folder.
First run node broker.js in one terminal, then node sub.js in number 2, then run node pub.js in the third. 
This will start sending data through the system, and the data will be stored in our DB
for later potential use. 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    If you get an validation error while working on MQTT comment out '\node_modules\jsonschema\lib\validator.js'
    line number 109-111'. 

    The code looks like this:

    if((typeof schema !== 'boolean' && typeof schema !==
    'object') || schema === null){ throw new
    SchemaError('Expected `schema` to be an object or
    boolean');
    }


    This will fix your validation error. 

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Regards Sandra Smaaberg and Simen Bergo
group Cloud Nine