function property_lastKnownHomeNetwork(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'lastKnownHomeNetwork') {
        context.report(node, "lastKnownHomeNetwork can be unsafe.");

      }
    }
  }

}
