function property_mozAlarms(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozAlarms') {
        context.report(node, "mozAlarms can be unsafe.");

      }
    }
  }

}
