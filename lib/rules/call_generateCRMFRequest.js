function call_generateCRMFRequest(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'generateCRMFRequest') {
        context.report(node, "The function generateCRMFRequest can be unsafe");
      }
    }
  };

}
