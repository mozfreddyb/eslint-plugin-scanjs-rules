/**
 * @fileoverview Test for call_insertAdjacentHTML rule
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
eslintTester.addRuleTest("lib/rules/call_insertAdjacentHTML", {
    valid: [
        { code: "insertAdjacentHTML" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "insertAdjacentHTML(foo)",
            errors: [
                { message: "The function insertAdjacentHTML can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json