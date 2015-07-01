/**
 * @fileoverview Rule call_insertAdjacentHTML
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {
  
      return {
      "CallExpression": function (node) {
        if (node.callee.name == 'insertAdjacentHTML') {
          context.report(node, "The function insertAdjacentHTML can be unsafe");
        }
      }
    };

  }