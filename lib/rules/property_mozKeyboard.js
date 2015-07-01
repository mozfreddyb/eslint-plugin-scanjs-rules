function property_mozKeyboard(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozKeyboard') {
        context.report(node, "mozKeyboard can be unsafe.");

      }
    }
  }

}
