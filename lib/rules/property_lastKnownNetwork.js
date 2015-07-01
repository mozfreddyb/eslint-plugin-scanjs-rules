function property_lastKnownNetwork(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'lastKnownNetwork') {
        context.report(node, "lastKnownNetwork can be unsafe.");

      }
    }
  }

}
