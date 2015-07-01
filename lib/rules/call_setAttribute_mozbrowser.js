function call_setAttribute_mozbrowser(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'setAttribute') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'mozbrowser')) {
            context.report(node, "The function setAttribute with parameter mozbrowser can be unsafe");
          }
        }
      }
    }
  }
}
