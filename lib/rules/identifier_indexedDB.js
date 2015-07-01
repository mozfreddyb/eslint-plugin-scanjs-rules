function identifier_indexedDB(context) {

  return {
    "Identifier": function (node) {
      if (node.name == rule.source) {
        context.report(node, "indexedDB can be unsafe.");
      }
    }
  }

}
