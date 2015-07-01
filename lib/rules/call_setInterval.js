/**
 * @fileoverview Rule call_setInterval
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {

  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'setInterval') {
        context.report(node, "The function setInterval can be unsafe");
      }
    }
  };

}
