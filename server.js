require("dotenv").config();
const express = require("express");
const app = express({
    
});

const homeRoute = require("./routes/home.route");
const apiRoute =require("./routes/api.route");

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

//routes middle
app.use("/", homeRoute);
app.use("/api", apiRoute);

app.listen(5000, () => {
	console.log("Server is running");
});

module.exports = app;
