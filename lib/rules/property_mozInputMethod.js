function property_mozInputMethod(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozInputMethod') {
        context.report(node, "mozInputMethod can be unsafe.");

      }
    }
  }

}
