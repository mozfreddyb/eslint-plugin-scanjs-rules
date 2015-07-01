function call_setInterval(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'setInterval') {
        context.report(node, "The function setInterval can be unsafe");
      }
    }
  };

}
