//Returns repos that are not a Fork and are classified as JavaScript Project

exports.filterRepos = (repos) => {
  return repos.filter(isFork).filter(isJS);
}

exports.getPass = () => {
  var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'config.txt');

  fs.readFile(filePath, {
    encoding: 'utf-8'
  }, function(err, data) {
    if (!err) {
      console.log(data);
      return data;
    } else {
      console.log(err);
    }
  });
}

function isFork(value) {
  return !value.fork;
}

function isJS(value) {
  return value.language === "JavaScript";
}
