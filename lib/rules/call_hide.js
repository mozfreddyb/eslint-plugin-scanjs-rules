function call_hide(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'hide') {
        context.report(node, "The function hide can be unsafe");
      }
    }
  };

}
