/**
 * @fileoverview Test for assign_to_location rule
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
eslintTester.addRuleTest("lib/rules/accidental_assignment", {
  valid: [
    { code: "if (foo == bar) { console.log('equals') }"  },
    { code: "while (meh==1) { mayChangeMeh(); }" },
    { code: "success = (expected==given) ? true : false;" },
    { code: "do { nothing(); } while(condition==true)" }

  ],    // Examples of code that should trigger the rule
  invalid: [

    {
      code: "if (foo=bar);",
      errors: [
        { message: "Assignment in IfStatement. Is this accidental?" }
      ]
    },
    {
      code: "while (a=1);",
      errors: [
        { message: "Assignment in WhileStatement. Is this accidental?" }
      ]
    },
    {
      code: "success = (expected=given) ? true : false;",
      errors: [
        { message: "Assignment in ConditionalExpression. Is this accidental?" }
      ]
    },
    {
      code: "do { nothing(); } while(condition=true)",
      errors: [
        { message: "Assignment in DoWhileStatement. Is this accidental?" }
      ]
    },
  ]
});
