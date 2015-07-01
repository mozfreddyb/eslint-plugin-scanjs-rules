function call_setMessageHandler_connect(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'setMessageHandler') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'connect')) {
            context.report(node, "The function setMessageHandler with parameter connect can be unsafe");
          }
        }
      }
    }
  }
}
