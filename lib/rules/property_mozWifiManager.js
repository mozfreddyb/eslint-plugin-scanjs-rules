function property_mozWifiManager(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozWifiManager') {
        context.report(node, "mozWifiManager can be unsafe.");

      }
    }
  }

}
