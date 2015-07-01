/**
 * @fileoverview Test for call_writeln rule
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
eslintTester.addRuleTest("lib/rules/call_writeln", {
    valid: [
        { code: "document.writeln" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "document.writeln('test')",
            errors: [
                { message: "The function writeln can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json