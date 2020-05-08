import render from 'miniapp-render';

const { cache, EventTarget } = render.$$adapter;

export default function(eventName, evt, extra, pageId, nodeId) {
  const originNodeId =
    evt.currentTarget.dataset.privateNodeId || nodeId;
  const originNode = cache.getNode(pageId, originNodeId);

  if (!originNode) return;

  EventTarget.$$process(
    originNode,
    eventName,
    evt,
    extra
  );
}
