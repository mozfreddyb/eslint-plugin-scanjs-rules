/**
 * @fileoverview Test for identifier_sessionStorage rule
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
eslintTester.addRuleTest("lib/rules/identifier_sessionStorage", {
    valid: [
        { code: " 'sessionStorage'" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "sessionStorage.setItem('name', 'user1')",
            errors: [
                { message: "sessionStorage can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json