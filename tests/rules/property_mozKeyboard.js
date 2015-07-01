/**
 * @fileoverview Test for property_mozKeyboard rule
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
eslintTester.addRuleTest("lib/rules/property_mozKeyboard", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "var keyboard = navigator.mozKeyboard || navigator.mozInputMethod;",
            errors: [
                { message: "mozKeyboard can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json