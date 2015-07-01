function call_mozSetMessageHandler(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'mozSetMessageHandler') {
        context.report(node, "The function mozSetMessageHandler can be unsafe");
      }
    }
  };

}
