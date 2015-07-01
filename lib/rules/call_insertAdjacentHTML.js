function call_insertAdjacentHTML(context) {
  return {
    "CallExpression": function (node) {
      if (node.callee.name == 'insertAdjacentHTML') {
        context.report(node, "The function insertAdjacentHTML can be unsafe");
      }
    }
  };

}
