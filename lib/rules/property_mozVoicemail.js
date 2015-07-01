function property_mozVoicemail(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozVoicemail') {
        context.report(node, "mozVoicemail can be unsafe.");

      }
    }
  }

}
