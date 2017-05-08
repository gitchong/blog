require('./create-posts-json')('./posts');
var fs = require('fs');
var path = require('path');
var Client = require('ftp');
var async = require('async');
var config = require('../config/prod.env');
var client = new Client();

client.on('ready', function() {
  const paths = fs.readdirSync(path.join(__dirname, '..', 'static', 'posts'));
  const upload = function (file, callback) {
    client.put(path.join(__dirname, '..', 'static', 'posts', file), `./htdocs/static/posts/${file}`, callback);
  };

  async.map(paths, upload, function (err) {
    if (err) {
      return console.error(err);
    } else {
      client.end();
    }
  });
});

client.connect({
  host: config.FTP_HOST,
  user: config.FTP_USER,
  password: config.FTP_PASSWORD,
});
