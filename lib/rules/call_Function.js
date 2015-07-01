function call_Function(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'Function') {
        context.report(node, "The function Function can be unsafe");
      }
    }
  };

}
