function assign_to_search(context) {
  return {
    "AssignmentExpression:exit": function (node) {
      if ("property" in node.left) { // member assignment, so yeah.
        if (['+', '+='].indexOf(node.operator) !== -1) {
          if (node.left.property.name === 'search') {
            if (!allowedExpression(node.right, node.parent)) {
              context.report(node, "Assignment to search can be unsafe");
            }
          }
        }
      }
    }
  };

}
