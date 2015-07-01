function property_mozPower(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozPower') {
        context.report(node, "mozPower can be unsafe.");

      }
    }
  }

}
