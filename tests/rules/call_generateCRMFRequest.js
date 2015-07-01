/**
 * @fileoverview Test for call_generateCRMFRequest rule
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
eslintTester.addRuleTest("lib/rules/call_generateCRMFRequest", {
  valid: [
    { code: "crypto.generateCRMFRequest" }
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "crypto.generateCRMFRequest('CN=0',0,0,null,'jsCode'+usercontrolledVal,384,null,'rsa-dual-use')",
      errors: [
        { message: "The function generateCRMFRequest can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
