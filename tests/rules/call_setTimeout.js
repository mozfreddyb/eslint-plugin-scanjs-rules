/**
 * @fileoverview Test for call_setTimeout rule
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
eslintTester.addRuleTest("lib/rules/call_setTimeout", {
  valid: [
    { code: "setTimeout" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "global.setTimeout('jsCode'+usercontrolledVal ,timeMs)",
      errors: [
        { message: "The function setTimeout can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
