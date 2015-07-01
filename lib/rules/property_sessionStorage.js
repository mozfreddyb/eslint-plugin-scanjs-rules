function property_sessionStorage(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'sessionStorage') {
        context.report(node, "sessionStorage can be unsafe.");

      }
    }
  }

}
