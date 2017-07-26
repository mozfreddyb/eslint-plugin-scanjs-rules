"use strict";

var fs = require('fs');
var path = require('path');

var rulesFiles = fs.readdirSync('./lib/rules/');

// Generate an object of the form `{ ruleName: require('path/to/ruleFile.js'), ... }`
// for use as the `rules` object of the exported object
var rules = rulesFiles.reduce(function (aggregator, ruleFileName) {
  if (path.extname(ruleFileName) === '.js') {
    var ruleName = path.basename(ruleFileName, '.js');
    aggregator[ruleName] = require('./lib/rules/' + ruleFileName);
  }

  return aggregator;
}, {});

// Using the same rule names from the `rules` object, generate an object
// of the form { ruleName: 2, ... } to be used as the `rulesConfig` object
// of the exported object
var rulesConfig = Object.keys(rules).reduce(function (aggregator, ruleName) {
  aggregator[ruleName] = 2;
  return aggregator;
}, {});

module.exports = {
  rules: rules,
  rulesConfig: rulesConfig
};
