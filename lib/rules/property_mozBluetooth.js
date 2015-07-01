function property_mozBluetooth(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozBluetooth') {
        context.report(node, "mozBluetooth can be unsafe.");

      }
    }
  }

}
