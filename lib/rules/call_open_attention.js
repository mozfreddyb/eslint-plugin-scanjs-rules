function call_open_attention(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'open') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'attention')) {
            context.report(node, "The function open with parameter attention can be unsafe");
          }
        }
      }
    }
  }
}
