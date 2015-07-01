function call_getDeviceStorage_crashes(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'getDeviceStorage') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'crashes')) {
            context.report(node, "The function getDeviceStorage with parameter crashes can be unsafe");
          }
        }
      }
    }
  }
}
