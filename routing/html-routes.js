



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


//serves web pages
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get("/tables", function(req, res){
	res.sendFile(path.join(__dirname, 'tables.html'));


app.listen(port, function() {
	console.log("App listening on PORT: " + port);
});