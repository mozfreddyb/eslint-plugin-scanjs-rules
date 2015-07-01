function call_write(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'write') {
        context.report(node, "The function write can be unsafe");
      }
    }
  };

}
