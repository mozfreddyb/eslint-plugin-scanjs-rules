/**
 * @fileoverview Test for call_mozSetMessageHandler_wappush_received rule
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
eslintTester.addRuleTest("lib/rules/call_mozSetMessageHandler_wappush_received", {
  valid: [
    { code: "foo()" } // XXX no need to test for code that does not trigger.
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "window.navigator.mozSetMessageHandler('wappush-received', wpm_onWapPushReceived)",
      errors: [
        { message: "The function mozSetMessageHandler with parameter wappush-received can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
