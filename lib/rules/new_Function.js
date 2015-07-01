function new_Function(context) {
  return {
    "NewExpression": function (node) {
      if (node.callee.name == 'Function') {
        context.report(node, "The Function constructor can be unsafe");
      }
    }
  };

}
