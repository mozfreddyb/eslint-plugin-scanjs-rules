function property_mgmt(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mgmt') {
        context.report(node, "mgmt can be unsafe.");

      }
    }
  }

}
