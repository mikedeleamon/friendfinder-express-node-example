


var app = express(); // Tells node that we are creating an "express" server
var port = process.env.PORT || 3002; // Sets an initial port. We'll use this later in our listener


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var friendArr=[]
app.get("/api/friends", function(req, res){
	res.send(friendArr)
});

app.post("/api/friends", function(req, res){
	
	var newSurvey = req.body;
	friendArr.push(newSurvey);
	res.json(friendArr);
});