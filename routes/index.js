module.exports = function Route(app){
	// root route to render the index.ejs view
	app.get('/', function(req, res) {
        // res.send('<h1>Hello World</h1>'); // Test message, prints on the browser page
	    res.render("index");
	})
	// post route for adding a data from a survey
	app.post('/result', function(req, res) {
		// submitted_info = {
		// 	name: req.body.name,
		// 	dojo_location: req.body.dojo_location,
		// 	favorite_language: req.body.favorite_language,
		// 	comment: req.body.comment
		// };
        console.log(req.body);
	 	res.render("result",{user_data: req.body});
	})
};
