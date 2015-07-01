/**
 * @fileoverview Test for call_setImmediate rule
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
eslintTester.addRuleTest("lib/rules/call_setImmediate", {
    valid: [
        { code: "setImmediate" }
    ],    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "global.setImmediate('jsCode'+usercontrolledVal )",
            errors: [
                { message: "The function setImmediate can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json