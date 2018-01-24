function cn(node, what) {
  if (what == "c") {
    var nodesArray = node.children;
    var textWhat = "chidren";
  }
  else if (what == "s") {
    var nodesArray = node.siblings;
    var textWhat = "siblings";
  }else {
    console.warn("cn : no parameter");
    return;
  }

  console.log("List of " + textWhat + " for " + node.name + " (" + Object.keys(nodesArray).length + ")");
  for (var nodeIndex in nodesArray) {
      var subNode = nodesArray[nodeIndex];
      console.log(subNode.name);
  }
}