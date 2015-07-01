function property_indexedDB(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'indexedDB') {
        context.report(node, "indexedDB can be unsafe.");

      }
    }
  }

}
