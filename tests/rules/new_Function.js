/**
 * @fileoverview Test for new_Function rule
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
eslintTester.addRuleTest("lib/rules/new_Function", {
    valid: [
        { code: "Function" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "new Function('jsCode'+usercontrolledVal ) ",
            errors: [
                { message: "The Function constructor can be unsafe" }
            ]
        },
        {
            code: " new Function('arg','arg2','jsCode'+usercontrolledVal )",
            errors: [
                { message: "The Function constructor can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json