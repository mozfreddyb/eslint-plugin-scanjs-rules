function new_MozSpeakerManager(context) {
  return {
    "NewExpression": function (node) {
      if (node.callee.name == 'MozSpeakerManager') {
        context.report(node, "The MozSpeakerManager constructor can be unsafe");
      }
    }
  };

}
