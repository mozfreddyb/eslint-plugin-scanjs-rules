function call_open_remote_true(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'open') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'remote=true')) {
            context.report(node, "The function open with parameter remote=true can be unsafe");
          }
        }
      }
    }
  }
}
