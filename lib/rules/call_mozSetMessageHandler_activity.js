function call_mozSetMessageHandler_activity(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'mozSetMessageHandler') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'activity')) {
            context.report(node, "The function mozSetMessageHandler with parameter activity can be unsafe");
          }
        }
      }
    }
  }
}
