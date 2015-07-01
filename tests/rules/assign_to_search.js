/**
 * @fileoverview Test for assign_to_search rule
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
eslintTester.addRuleTest("lib/rules/assign_to_search", {
    valid: [
        { code: "foo.search==bar" }
    ]
,    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "foo.search=bar",
            errors: [
                { message: "Assignment to search can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json