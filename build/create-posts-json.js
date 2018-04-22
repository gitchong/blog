var fs = require('fs');
var path = require('path');
var m2j = require('markdown-to-json');
var hljs = require('highlight.js');
var md = require('markdown-it')().use(require('markdown-it-highlightjs'));

var list = function (filePaths) {
  var results = m2j.parse(filePaths, {
    minify: false,
    width: 0,
    outfile: null,
    content: false,
  });
  var obj = JSON.parse(results);
  var arr = [];

  for (var key in obj) {
    var item = obj[key];

    arr.push(item);
  }

  fs.writeFile(`static/posts/list.json`, JSON.stringify(arr));
};

var posts = function (filenames) {
  var filePaths = [];

  for (var i = 0; i < filenames.length; i++) {
    var filename = filenames[i];
    var results = m2j.parse([`posts/${filename}`], {
      minify: false,
      width: 0,
      outfile: null,
      content: true,
    });

    results = JSON.parse(results);
    results = results[filename.replace('.md', '')];
    results.content = md.render(results.content);

    fs.writeFile(`static/posts/${filename.replace('.md', '.json')}`, JSON.stringify(results));
    filePaths.push(`posts/${filename}`);
  }

  return filePaths;
};

var create = function (basePath) {
  var filenames = fs.readdirSync(basePath);

  if (!fs.existsSync('static/posts')) {
    fs.mkdirSync('static/posts');
  }

  var filePaths = posts(filenames);

  list(filePaths);
};
create('./posts');

module.exports = create;
