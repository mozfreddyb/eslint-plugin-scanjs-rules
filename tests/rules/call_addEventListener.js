/**
 * @fileoverview Test for call_addEventListener rule
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
eslintTester.addRuleTest("lib/rules/call_addEventListener", {
    valid: [
        { code: "addEventListener" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "foo.addEventListener(bar+'bar')",
            errors: [
                { message: "The function addEventListener can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json