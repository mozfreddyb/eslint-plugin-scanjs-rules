function property_mozNfc(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozNfc') {
        context.report(node, "mozNfc can be unsafe.");

      }
    }
  }

}
