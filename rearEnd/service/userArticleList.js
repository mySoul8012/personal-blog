let articleModel = require("../model/articles.js");

let userArticleList = new Promise(function(resolve, reject){
	articleModel.find({}, (err, docs) => {
		if(err){
			console.log(err);
			return;
		}
		resolve(docs);
	})
})

module.exports = userArticleList;