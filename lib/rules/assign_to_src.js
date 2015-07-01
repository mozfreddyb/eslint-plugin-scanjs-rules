function assign_to_src(context) {
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
