"use strict";
var assert = require('assert');
var fs = require('fs');
var path = require('path');

var projectRoot = path.join(__dirname, '..');

var rulesFiles = fs.readdirSync(path.join(projectRoot, './lib/rules/'));

var myEslintConfig = require(path.join(projectRoot, './index'));

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
