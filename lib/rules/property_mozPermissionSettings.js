function property_mozPermissionSettings(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozPermissionSettings') {
        context.report(node, "mozPermissionSettings can be unsafe.");

      }
    }
  }

}
