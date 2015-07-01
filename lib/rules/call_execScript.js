function call_execScript(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'execScript') {
        context.report(node, "The function execScript can be unsafe");
      }
    }
  };

}
