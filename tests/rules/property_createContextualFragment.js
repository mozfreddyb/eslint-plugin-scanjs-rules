/**
 * @fileoverview Test for property_createContextualFragment rule
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
eslintTester.addRuleTest("lib/rules/property_createContextualFragment", {
  valid: [
    { code: "createContextualFragment" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "foo.createContextualFragment",
      errors: [
        { message: "createContextualFragment can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
