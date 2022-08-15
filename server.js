require("dotenv").config();
const express = require("express");

const os= require("os");
const cluster = require("cluster");

const app = express({
    
});
app.set("view engine", "ejs");

const morgan = require("morgan");

const homeRoute = require("./routes/home.route");
const apiRoute =require("./routes/api.route");


app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(morgan( (tokens, req, res) => {
	return [
		`${process.pid}`,
		tokens.method(req, res),
		'localhost:3000',
		tokens.url(req, res),
		tokens.status(req, res),
		tokens.res(req, res, "content-length"),
		"-",
		tokens["response-time"](req, res),
		"ms",

	].join(" ");
}));

//routes middle
// app.use("/", homeRoute);
app.use("/api", apiRoute);

app.get('/', (req, res) => {
	res.render('index', {
		title: 'Express',
		data: "Hi guys",
	});
	cluster.worker.kill();
})






app.use((err, req, res, next) => {
	if(err){
		console.log(err);
		res.status(500).send("Something went wrong");
	}
})

//cluster logic
exports.killCluster = () => {
	cluster.worker.kill();
};

const cpus = os.cpus().length;
try{
if (cluster.isMaster) {
	for (let i = 0; i < cpus; i++) {
		cluster.fork();
	}
	cluster.on("exit", (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
		cluster.fork();
	});
} else {
	app.listen(process.env.PORT || 3000, () => {
		console.log(
			`\t🚀running on--->\t worker:: ${process.pid}\t\t||\tport:: ${
				process.env.PORT || 3000
			}`
		);
	});
}
} catch(err){
	if (err) throw err;
}



// app.listen(process.env.PORT || 5000, () => {
// 	console.log("Server is running");
// });




module.exports = app;
