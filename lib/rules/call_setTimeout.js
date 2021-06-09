/**
 * @fileoverview Rule call_setTimeout
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {

  return {
    "CallExpression": function (node) {
      if ((node.callee.name == 'setTimeout') || ((node.callee.property) && (node.callee.property.name == 'setTimeout'))) {
        context.report(node, "Calling setTimeout with a first argument as string (or string concatenation) with user input may lead to XSS");
      }
    }
  };

}
