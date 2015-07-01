function assign_to_onmessage(context) {

  return {
    "AssignmentExpression:exit": function (node) {
      if (node.left == 'onmessage') {
        context.report(node, "Assignment to onmessage can be unsafe");
      }
    }
  };

}
