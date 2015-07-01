function identifier_sessionStorage(context) {

  return {
    "Identifier": function (node) {
      if (node.name == rule.source) {
        context.report(node, "sessionStorage can be unsafe.");
      }
    }
  }

}
