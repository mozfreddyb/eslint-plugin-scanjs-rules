/**
 * @fileoverview Test for assign_to_mozAudioChannel rule
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
eslintTester.addRuleTest("lib/rules/assign_to_mozAudioChannel", {
  valid: [
    { code: "foo()" } // XXX no need to test for code that does not trigger.
  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "ringtonePlayer.mozAudioChannel = 'telephony'",
      errors: [
        { message: "Assignment to mozAudioChannel can be unsafe" }
      ]
    },
  ]
});  // auto-generated from scanjs rules.json
