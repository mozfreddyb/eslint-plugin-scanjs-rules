/**
 * @fileoverview Test for assign_to_innerHTML rule
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
eslintTester.addRuleTest("lib/rules/assign_to_innerHTML", {
    valid: [
        { code: "a.innerHTML='foo'+'bar'" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "a.innerHTML=foo",
            errors: [
                { message: "Assignment to innerHTML can be unsafe" }
            ]
        },
        {
            code: "a.innerHTML=foo+'bar'",
            errors: [
                { message: "Assignment to innerHTML can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json