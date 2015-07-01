function property_mozMobileConnections(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozMobileConnections') {
        context.report(node, "mozMobileConnections can be unsafe.");

      }
    }
  }

}
