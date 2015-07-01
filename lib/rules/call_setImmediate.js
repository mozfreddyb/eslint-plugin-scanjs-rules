function call_setImmediate(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'setImmediate') {
        context.report(node, "The function setImmediate can be unsafe");
      }
    }
  };

}
