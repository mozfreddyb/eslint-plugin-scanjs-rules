function property_mozCellBroadcast(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozCellBroadcast') {
        context.report(node, "mozCellBroadcast can be unsafe.");

      }
    }
  }

}
