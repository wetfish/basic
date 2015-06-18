// Polyfill from MDN for IE support
// See: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
private.CustomEvent = function(event, params)
{
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
}

private.CustomEvent.prototype = window.Event.prototype;
