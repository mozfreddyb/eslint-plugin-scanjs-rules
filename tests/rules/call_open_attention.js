/**
 * @fileoverview Test for call_open_attention rule
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
eslintTester.addRuleTest("lib/rules/call_open_attention", {
    valid: [
        { code: "foo()" } // XXX no need to test for code that does not trigger.
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.open('oncall.html', '', 'attention')",
            errors: [
                { message: "The function open with parameter attention can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json