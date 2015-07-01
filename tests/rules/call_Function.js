/**
 * @fileoverview Test for call_Function rule
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
eslintTester.addRuleTest("lib/rules/call_Function", {
  valid: [
    { code: "Function" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "Function('jsCode'+usercontrolledVal ) ",
      errors: [
        { message: "The function Function can be unsafe" }
      ]
    },
    {
      code: " Function('arg','arg2','jsCode'+usercontrolledVal )",
      errors: [
        { message: "The function Function can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
