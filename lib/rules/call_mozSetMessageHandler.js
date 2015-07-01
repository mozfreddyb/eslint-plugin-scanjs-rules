/**
 * @fileoverview Rule call_mozSetMessageHandler
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {
  
      return {
      "CallExpression": function (node) {
        if (node.callee.name == 'mozSetMessageHandler') {
          context.report(node, "The function mozSetMessageHandler can be unsafe");
        }
      }
    };

  }