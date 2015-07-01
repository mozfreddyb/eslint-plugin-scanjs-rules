function property_mozMobileConnection(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozMobileConnection') {
        context.report(node, "mozMobileConnection can be unsafe.");

      }
    }
  }

}
