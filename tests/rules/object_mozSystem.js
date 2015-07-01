/**
 * @fileoverview Test for object_mozSystem rule
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
eslintTester.addRuleTest("lib/rules/object_mozSystem", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "var xhr = new XMLHttpRequest({mozSystem: true});",
            errors: [
                { message: "mozSystem can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json