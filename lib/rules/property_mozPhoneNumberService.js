function property_mozPhoneNumberService(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozPhoneNumberService') {
        context.report(node, "mozPhoneNumberService can be unsafe.");

      }
    }
  }

}
