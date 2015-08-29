if(Posts.find().count() === 0){
	Posts.insert({
		title: 'I want to stalk people today!',
		url: 'http://www.facebook.com'
	});

	Posts.insert({
		title: 'I want to waste time now',
		url: 'http://www.yotube.com'
	});
}