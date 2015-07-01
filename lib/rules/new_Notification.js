function new_Notification(context) {
  return {
    "NewExpression": function (node) {
      if (node.callee.name == 'Notification') {
        context.report(node, "The Notification constructor can be unsafe");
      }
    }
  };

}
