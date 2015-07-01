function call_addEventListener_deviceproximity(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'addEventListener') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'deviceproximity')) {
            context.report(node, "The function addEventListener with parameter deviceproximity can be unsafe");
          }
        }
      }
    }
  }
}
