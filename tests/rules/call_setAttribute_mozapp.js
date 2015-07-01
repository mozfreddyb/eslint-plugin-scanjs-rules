/**
 * @fileoverview Test for call_setAttribute_mozapp rule
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
eslintTester.addRuleTest("lib/rules/call_setAttribute_mozapp", {
    valid: [
        { code: "foo()" } // XXX no need to test for code that does not trigger.
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "browser.setAttribute('mozapp', config.manifestURL)",
            errors: [
                { message: "The function setAttribute with parameter mozapp can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json