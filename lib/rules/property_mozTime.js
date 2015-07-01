function property_mozTime(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozTime') {
        context.report(node, "mozTime can be unsafe.");

      }
    }
  }

}
