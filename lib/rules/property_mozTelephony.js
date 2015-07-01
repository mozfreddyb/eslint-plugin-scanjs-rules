function property_mozTelephony(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozTelephony') {
        context.report(node, "mozTelephony can be unsafe.");

      }
    }
  }

}
