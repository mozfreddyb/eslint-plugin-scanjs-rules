function property_mozFMRadio(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozFMRadio') {
        context.report(node, "mozFMRadio can be unsafe.");

      }
    }
  }

}
