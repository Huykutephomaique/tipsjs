'use strict';
const mongoose = require('mongoose');
const _SECONDS = 5000;
const process = require('process');
const os = require('os');
//count Connect 
const countConnect = () =>{
    const numConnections = mongoose.connections.length;
    console.log(`Number of connections::${numConnections}`)
}
// check over load 
const checkOverload = () =>{
    setInterval( () =>{
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss
        // Example maximum nunber of connect base on number of cores
        const maxConnections = numCores * 5 
        console.log(`memory usage: ${memoryUsage / 1024/ 1024} MB`)
        console.log(`Number of connections: ${numConnection}`)
        console.log(`number core: ${numCores}`)

        if (numConnection > maxConnections){
            console.log(`server overloaded detected`)
        }
        
    }, _SECONDS ) // Monitor every 5s
}

module.exports = { countConnect, checkOverload }
