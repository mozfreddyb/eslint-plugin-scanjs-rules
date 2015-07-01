function call_setTimeout(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'setTimeout') {
        context.report(node, "The function setTimeout can be unsafe");
      }
    }
  };

}
