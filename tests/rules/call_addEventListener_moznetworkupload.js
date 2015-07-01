/**
 * @fileoverview Test for call_addEventListener_moznetworkupload rule
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
eslintTester.addRuleTest("lib/rules/call_addEventListener_moznetworkupload", {
    valid: [
        { code: "window.addEventListener('moznetworkdownload', downloadHandler);" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.addEventListener('moznetworkupload', uploadHandler);",
            errors: [
                { message: "The function addEventListener with parameter moznetworkupload can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json