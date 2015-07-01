/**
 * @fileoverview Rule assign_to_src
 * @author ScanJS contributors
 * @copyright 2015 Mozilla Corporation. All rights reserved.
 */
"use strict";

module.exports = function (context) {
  
      return {
      "AssignmentExpression:exit": function (node) {
        if ("property" in node.left) { // member assignment, so yeah.
          if (['+', '+='].indexOf(node.operator) !== -1) {
            if (node.left.property.name === 'src') {
              if (!allowedExpression(node.right, node.parent)) {
                context.report(node, "Assignment to src can be unsafe");
              }
            }
          }
        }
      }
    };

  }