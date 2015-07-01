function property_mozNetworkStats(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozNetworkStats') {
        context.report(node, "mozNetworkStats can be unsafe.");

      }
    }
  }

}
