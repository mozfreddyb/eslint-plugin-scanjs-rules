function call_parseFromString(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'parseFromString') {
        context.report(node, "The function parseFromString can be unsafe");
      }
    }
  };

}
