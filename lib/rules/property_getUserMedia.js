function property_getUserMedia(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'getUserMedia') {
        context.report(node, "getUserMedia can be unsafe.");

      }
    }
  }

}
