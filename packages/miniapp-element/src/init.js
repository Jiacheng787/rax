import { componentNameMap } from './component';
import checkComponentAttr from './vdom/checkComponentAttr';

export default function(instance, data) {
  const domNode = instance.domNode;
  const tagName = domNode.tagName;

  if (tagName === 'BUILTIN-COMPONENT') {
    // BuildIn component
    data.builtinComponentName = domNode.behavior;
    const builtinComponentName = componentNameMap[data.builtinComponentName];
    if (builtinComponentName) checkComponentAttr(instance, builtinComponentName, data);
    else console.warn(`value "${data.builtinComponentName}" is not supported for builtin-component's behavior`);
  } else if (tagName === 'CUSTOM-COMPONENT') {
    // Custom component
    data.customComponentName = domNode.behavior;
    data.nodeId = instance.nodeId;
    data.pageId = instance.pageId;
  } else {
    // Could be replaced html tag
    const builtinComponentName = componentNameMap[tagName.toLowerCase()];
    if (builtinComponentName) data.builtinComponentName = builtinComponentName;
  }
}
