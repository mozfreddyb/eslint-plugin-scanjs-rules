function call_connect(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'connect') {
        context.report(node, "The function connect can be unsafe");
      }
    }
  };

}
