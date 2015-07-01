/**
 * @fileoverview Test for property_mozInputMethod rule
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
eslintTester.addRuleTest("lib/rules/property_mozInputMethod", {
    valid: [
        { code: "foo()" } // XXX no need to test for code that does not trigger.
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "window.navigator.mozInputMethod",
            errors: [
                { message: "mozInputMethod can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json