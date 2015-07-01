function property_geolocation(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'geolocation') {
        context.report(node, "geolocation can be unsafe.");

      }
    }
  }

}
