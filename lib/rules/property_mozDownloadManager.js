function property_mozDownloadManager(context) {
  return {
    "MemberExpression": function (node) {
      if (node.property.name == 'mozDownloadManager') {
        context.report(node, "mozDownloadManager can be unsafe.");

      }
    }
  }

}
