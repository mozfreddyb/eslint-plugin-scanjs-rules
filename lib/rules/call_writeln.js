function call_writeln(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'writeln') {
        context.report(node, "The function writeln can be unsafe");
      }
    }
  };

}
