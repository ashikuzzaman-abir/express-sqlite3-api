// const db = require('../knex.db');
// const {killCluster} = require('../server');
const cluster = require('cluster');



exports.sayHello = (req, res) => {
    res.status(200).send("Hello World");
    cluster.worker.kill();
}

exports.errors = (err, req, res, next) => {
    if(err){
        console.log(err.message)
        res.status(400).json(err.message);
    }
    return res.json({
        message: "No Error"

    })
}



