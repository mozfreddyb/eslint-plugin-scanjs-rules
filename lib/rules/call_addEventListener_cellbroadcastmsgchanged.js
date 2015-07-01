/**
 * @fileoverview Rule call_addEventListener_cellbroadcastmsgchanged
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {
  
      return {
      "CallExpression": function() {
        if (node.callee.name == 'addEventListener') {
          for (var i=0; i < node.arguments.length; i++) {
            var arg = node.arguments[i];
            if ((arg.type == "Literal") && (arg.value == 'cellbroadcastmsgchanged')) {
              context.report(node, "The function addEventListener with parameter cellbroadcastmsgchanged can be unsafe");
            }
          }
        }
      }
    }
  }