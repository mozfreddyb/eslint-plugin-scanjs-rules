function property_getDeviceStorage(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'getDeviceStorage') {
        context.report(node, "getDeviceStorage can be unsafe.");

      }
    }
  }

}
