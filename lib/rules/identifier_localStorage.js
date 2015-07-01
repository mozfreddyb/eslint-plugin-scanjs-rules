function identifier_localStorage(context) {

  return {
    "Identifier": function (node) {
      if (node.name == rule.source) {
        context.report(node, "localStorage can be unsafe.");
      }
    }
  }

}
