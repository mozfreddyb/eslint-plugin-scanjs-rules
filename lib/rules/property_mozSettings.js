function property_mozSettings(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozSettings') {
        context.report(node, "mozSettings can be unsafe.");

      }
    }
  }

}
