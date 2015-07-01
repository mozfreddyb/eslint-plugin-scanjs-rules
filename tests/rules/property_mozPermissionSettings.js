/**
 * @fileoverview Test for property_mozPermissionSettings rule
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
eslintTester.addRuleTest("lib/rules/property_mozPermissionSettings", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "var mozPerms = navigator.mozPermissionSettings;",
            errors: [
                { message: "mozPermissionSettings can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json