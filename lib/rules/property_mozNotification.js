function property_mozNotification(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozNotification') {
        context.report(node, "mozNotification can be unsafe.");

      }
    }
  }

}
