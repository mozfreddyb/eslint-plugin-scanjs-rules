function assign_to_outerHTML(context) {
  return {
    "AssignmentExpression:exit": function (node) {
      if ("property" in node.left) { // member assignment, so yeah.
        if (['+', '+='].indexOf(node.operator) !== -1) {
          if (node.left.property.name === 'outerHTML') {
            if (!allowedExpression(node.right, node.parent)) {
              context.report(node, "Assignment to outerHTML can be unsafe");
            }
          }
        }
      }
    }
  };

}
