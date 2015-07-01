function property_mozContacts(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozContacts') {
        context.report(node, "mozContacts can be unsafe.");

      }
    }
  }

}
