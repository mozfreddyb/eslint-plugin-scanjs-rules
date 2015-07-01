function property_createContextualFragment(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'createContextualFragment') {
        context.report(node, "createContextualFragment can be unsafe.");

      }
    }
  }

}
