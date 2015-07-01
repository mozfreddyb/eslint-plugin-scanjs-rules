function object_mozSystem(context) {
  return {
    "ObjectExpression": function (node) {
      for (var i = 0; i < node.properties.length; i++) {
        var prop = node.properties[i];
        if (prop.key.type == "Identifier") {
          if (prop.key.name == "mozSystem") {

          }
        } else if (prop.key.type == "Literalal") {
          if (prop.key.value == "mozSystem") {
            context.report(node, "mozSystem can be unsafe");
          }
        }
      }
    }
  }

}
