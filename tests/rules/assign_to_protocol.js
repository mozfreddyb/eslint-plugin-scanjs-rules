/**
 * @fileoverview Test for assign_to_protocol rule
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
eslintTester.addRuleTest("lib/rules/assign_to_protocol", {
    valid: [
        { code: "foo.protocol==bar" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "foo.protocol=bar",
            errors: [
                { message: "Assignment to protocol can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json