function property_getDataStores(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'getDataStores') {
        context.report(node, "getDataStores can be unsafe.");

      }
    }
  }

}
