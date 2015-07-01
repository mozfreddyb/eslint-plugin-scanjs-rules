function call_getDeviceStorage_sdcard(context) {
  return {
    "CallExpression": function () {
      if (node.callee.name == 'getDeviceStorage') {
        for (var i = 0; i < node.arguments.length; i++) {
          var arg = node.arguments[i];
          if ((arg.type == "Literal") && (arg.value == 'sdcard')) {
            context.report(node, "The function getDeviceStorage with parameter sdcard can be unsafe");
          }
        }
      }
    }
  }
}
