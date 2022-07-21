const db = require('../knex.db');


exports.sayHello = (req, res) => {
    res.status(200).send("Hello World");
}



