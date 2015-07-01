function property_mozCameras(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozCameras') {
        context.report(node, "mozCameras can be unsafe.");

      }
    }
  }

}
