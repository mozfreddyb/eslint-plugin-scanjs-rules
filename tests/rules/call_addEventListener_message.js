/**
 * @fileoverview Test for call_addEventListener_message rule
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
eslintTester.addRuleTest("lib/rules/call_addEventListener_message", {
    valid: [
        { code: "window.addEventListener('notmessage', receiveMessage, false); " }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.addEventListener('message', receiveMessage, false); ",
            errors: [
                { message: "The function addEventListener with parameter message can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json