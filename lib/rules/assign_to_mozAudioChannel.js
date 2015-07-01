function assign_to_mozAudioChannel(context) {
  return {
    "AssignmentExpression:exit": function (node) {
      if ("property" in node.left) { // member assignment, so yeah.
        if (['+', '+='].indexOf(node.operator) !== -1) {
          if (node.left.property.name === 'mozAudioChannel') {
            if (!allowedExpression(node.right, node.parent)) {
              context.report(node, "Assignment to mozAudioChannel can be unsafe");
            }
          }
        }
      }
    }
  };

}