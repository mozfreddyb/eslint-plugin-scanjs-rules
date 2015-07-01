/**
 * @fileoverview Test for property_mozAlarms rule
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
eslintTester.addRuleTest("lib/rules/property_mozAlarms", {
    valid: [
        { code: "MozAlarms" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "navigator.mozAlarms",
            errors: [
                { message: "mozAlarms can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json