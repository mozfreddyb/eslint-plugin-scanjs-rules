function call_mozSetMessageHandler_wappush_received(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'mozSetMessageHandler') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'wappush-received')) {
            context.report(node, "The function mozSetMessageHandler with parameter wappush-received can be unsafe");
          }
        }
      }
    }
  }
}
