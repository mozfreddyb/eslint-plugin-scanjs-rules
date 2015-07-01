/**
 * @fileoverview Test for property_mozNetworkStats rule
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
eslintTester.addRuleTest("lib/rules/property_mozNetworkStats", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "var networks = navigator.mozNetworkStats.getAvailableNetworks();",
            errors: [
                { message: "mozNetworkStats can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json