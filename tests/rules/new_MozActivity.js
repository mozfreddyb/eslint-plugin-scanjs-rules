/**
 * @fileoverview Test for new_MozActivity rule
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
eslintTester.addRuleTest("lib/rules/new_MozActivity", {
  valid: [
    { code: "MozActivity +1" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "new MozActivity({type:'pick'})",
      errors: [
        { message: "The MozActivity constructor can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
