function assign_to_pathname(context) {
  return {
    "AssignmentExpression:exit": function (node) {
      if ("property" in node.left) { // member assignment, so yeah.
        if (['+', '+='].indexOf(node.operator) !== -1) {
          if (node.left.property.name === 'pathname') {
            if (!allowedExpression(node.right, node.parent)) {
              context.report(node, "Assignment to pathname can be unsafe");
            }
          }
        }
      }
    }
  };

}
