function call_addEventListener(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'addEventListener') {
        context.report(node, "The function addEventListener can be unsafe");
      }
    }
  };

}
