/**
 * @fileoverview Test previous scanjs rules
 * @author Frederik Braun
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

var eslint = require("eslint"),
  ESLintTester = require("eslint-tester");

var eslintTester = new ESLintTester(eslint.linter);

var scanJsRules = require("./scanjs-rules.json");
var testObject = { valid: [], invalid: [] };
/* Rewriting testhit and testmiss attributes from scanJS rules into
   eslint test samples
 */

for (var i=0; i < scanJsRules.length; i++) {
  var rule = scanJsRules[i];
  console.log(rule.name);
  console.log(rule.testmiss);
  console.log(rule.testhit);
  var v = {
    code: rule.testmiss,
    //ecmaFeatures: { }
  };
  var i = {
    code: rule.testhit,
    errors: [{
        message: "ScanJS:", //XXX fill something more meaningful in here
        //type: "" //  AST node you expect to receive back using the type key. The AST node should represent the actual spot in the code where there is a problem.
      }]
  };

  testObject.valid.push(v);
  testObject.invalid.push(i);
}

/*
  XXX this does not work
      normaly, first argument is a filename of the rule we want to test
      but this is for all?!?! :<

 */
eslintTester.addRuleTest("", testObject);

