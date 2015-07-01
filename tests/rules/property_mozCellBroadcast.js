/**
 * @fileoverview Test for property_mozCellBroadcast rule
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
eslintTester.addRuleTest("lib/rules/property_mozCellBroadcast", {
/*    valid: [
        { code: "" }
    ],*/    // Examples of code that should trigger the rule
    invalid: [

        {
            code: "navigator.mozCellBroadcast.onreceived = this.show.bind(this);",
            errors: [
                { message: "mozCellBroadcast can be unsafe" }
            ]
        },
    ]
});  // auto-generated from scanjs rules.json