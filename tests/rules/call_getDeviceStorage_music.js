/**
 * @fileoverview Test for call_getDeviceStorage_music rule
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
eslintTester.addRuleTest("lib/rules/call_getDeviceStorage_music", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "storage = navigator.getDeviceStorage('music');",
            errors: [
                { message: "The function getDeviceStorage with parameter music can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json