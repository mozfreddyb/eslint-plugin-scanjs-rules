function property_mozMobileMessage(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozMobileMessage') {
        context.report(node, "mozMobileMessage can be unsafe.");

      }
    }
  }

}
