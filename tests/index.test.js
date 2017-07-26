"use strict";
var assert = require('assert');
var fs = require('fs');
var path = require('path');

var rulesFiles = fs.readdirSync('./lib/rules/');

var myEslintConfig = require('../index');

describe('eslint-plugin-scanjs-rules', function () {
  it('should have a rule for each file in ./lib/rules', function () {
    rulesFiles.forEach(function (ruleFileName) {
      if (path.extname(ruleFileName) === '.js') {
        var ruleName = path.basename(ruleFileName, '.js');
        assert.ok(myEslintConfig.rules[ruleName]);
      }
    });
  });

  it('should have a rulesConfig for each file in ./lib/rules', function () {
    rulesFiles.forEach(function (ruleFileName) {
      if (path.extname(ruleFileName) === '.js') {
        var ruleName = path.basename(ruleFileName, '.js');
        var ruleConfig = myEslintConfig.rulesConfig[ruleName];
        assert.ok(ruleConfig);
        assert.equal(ruleConfig, 2);
      }
    });
  });
});
