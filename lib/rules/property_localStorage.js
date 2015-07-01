function property_localStorage(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'localStorage') {
        context.report(node, "localStorage can be unsafe.");

      }
    }
  }

}
