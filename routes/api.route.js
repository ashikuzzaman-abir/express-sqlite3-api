const Router = require("express").Router();

Router.get("/", (req, res) => {
	res.status(200).send("Api is running");
});

module.exports = Router;
