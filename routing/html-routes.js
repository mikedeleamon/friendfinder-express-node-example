



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());


//serves web pages
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, 'home.html'));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, 'survey.html'));


app.listen(port, function() {
	console.log("App listening on PORT: " + port);
});