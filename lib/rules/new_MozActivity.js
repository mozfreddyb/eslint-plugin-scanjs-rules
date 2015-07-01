function new_MozActivity(context) {
  return {
    "NewExpression": function (node) {
      if (node.callee.name == 'MozActivity') {
        context.report(node, "The MozActivity constructor can be unsafe");
      }
    }
  };

}
