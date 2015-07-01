function call_eval(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'eval') {
        context.report(node, "The function eval can be unsafe");
      }
    }
  };

}
