/**
 * @fileoverview Test for call_mozSetMessageHandler_activity rule
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
eslintTester.addRuleTest("lib/rules/call_mozSetMessageHandler_activity", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "navigator.mozSetMessageHandler('activity',callback)",
            errors: [
                { message: "The function mozSetMessageHandler with parameter activity can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json