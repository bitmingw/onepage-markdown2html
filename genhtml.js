var marked = require('marked');
var fs = require('fs');

marked.setOptions({
	highlight: function (code) {
		return require('highlight.js').highlightAuto(code).value;
	}
});

var headfilename = 'header.html';
var stylefilename = 'style-script.html'
var footfilename = 'footer.html';

// specify you own file here
var infilename = 'YOUR-MARKDOWN-FILE.md';
var outfilename = 'YOUR-OUTPUT-FILE.html';

fs.readFile(headfilename, {encoding: 'utf8'}, function(err, data) {
	if (err) throw err;
	fs.writeFile(outfilename, data, function () {
	});
});

fs.readFile(stylefilename, {encoding: 'utf8'}, function(err, data) {
	if (err) throw err;
	fs.appendFile(outfilename, data, function () {
	});
});

fs.readFile(infilename, {encoding: 'utf8'}, function(err, data) {
	if (err) throw err;
	fs.appendFile(outfilename, marked(data), function() {
	});
});

fs.readFile(footfilename, {encoding: 'utf8'}, function(err, data) {
	if (err) throw err;
	fs.appendFile(outfilename, data, function () {
		console.log('Generate HTML successfully!');
	});
});
