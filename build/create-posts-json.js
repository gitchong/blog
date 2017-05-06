var fs = require('fs');
var path = require('path');
var m2j = require('markdown-to-json');
var markdown = require('markdown').markdown;

var createJSON = function (basePath) {
  var filenames = fs.readdirSync(basePath);
  var filePaths = [];

  if (!fs.existsSync('src/assets/posts')) {
    fs.mkdirSync('src/assets/posts');
  }

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
    results.content = markdown.toHTML(results.content);

    fs.writeFile(`./src/assets/posts/${filename.replace('.md', '.json')}`, JSON.stringify(results));
    filePaths.push(`posts/${filename}`);
  }

  m2j.parse(filePaths, {
    minify: false,
    width: 0,
    outfile: 'src/assets/posts/list.json',
    content: false,
  });
};

module.exports = createJSON;
