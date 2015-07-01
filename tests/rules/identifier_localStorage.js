/**
 * @fileoverview Test for identifier_localStorage rule
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
eslintTester.addRuleTest("lib/rules/identifier_localStorage", {
    valid: [
        { code: " 'localStorage'" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "localStorage.setItem('name', 'user1'); ",
            errors: [
                { message: "localStorage can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json