/**
 * @fileoverview Test for assign_to_outerHTML rule
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
eslintTester.addRuleTest("lib/rules/assign_to_outerHTML", {
    valid: [
        { code: "outerHTML" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "a.outerHTML=foo",
            errors: [
                { message: "Assignment to outerHTML can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json