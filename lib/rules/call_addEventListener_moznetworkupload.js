function call_addEventListener_moznetworkupload(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'addEventListener') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'moznetworkupload')) {
            context.report(node, "The function addEventListener with parameter moznetworkupload can be unsafe");
          }
        }
      }
    }
  }
}
