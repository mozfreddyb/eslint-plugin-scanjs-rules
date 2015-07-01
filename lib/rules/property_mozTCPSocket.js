function property_mozTCPSocket(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozTCPSocket') {
        context.report(node, "mozTCPSocket can be unsafe.");

      }
    }
  }

}
