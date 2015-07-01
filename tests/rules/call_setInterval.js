/**
 * @fileoverview Test for call_setInterval rule
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("eslint"),
  ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint.linter);
eslintTester.addRuleTest("lib/rules/call_setInterval", {
  valid: [
    { code: "setInterval" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "global.setInterval('jsCode'+usercontrolledVal ,timMs)",
      errors: [
        { message: "The function setInterval can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
