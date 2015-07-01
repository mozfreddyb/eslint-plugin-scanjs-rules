/**
 * @fileoverview Test for call_setAttribute_mozbrowser rule
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
eslintTester.addRuleTest("lib/rules/call_setAttribute_mozbrowser", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "iframe.setAttribute('mozbrowser', true);",
            errors: [
                { message: "The function setAttribute with parameter mozbrowser can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json