function property_addIdleObserver(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'addIdleObserver') {
        context.report(node, "addIdleObserver can be unsafe.");

      }
    }
  }

}
