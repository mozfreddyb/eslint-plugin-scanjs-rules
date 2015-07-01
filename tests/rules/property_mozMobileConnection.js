/**
 * @fileoverview Test for property_mozMobileConnection rule
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
eslintTester.addRuleTest("lib/rules/property_mozMobileConnection", {
    valid: [
        { code: "foo()" } // XXX no need to test for code that does not trigger.
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "var conn = window.navigator.mozMobileConnection || window.navigator.mozMobileConnections",
            errors: [
                { message: "mozMobileConnection can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json