/**
 * @fileoverview Test for call_open_remote=true rule
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
eslintTester.addRuleTest("lib/rules/call_open_remote=true", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.open(target.dataset.url, '_blank', 'remote=true');",
            errors: [
                { message: "The function open with parameter remote=true can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json