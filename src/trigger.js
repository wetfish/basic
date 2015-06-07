////////////////////////////////
// trigger() - trigger an event on matched elements
// usage - $('.some-button').trigger('click');                      // Trigger the click event on .some-button
// usage - $('.some-button').trigger('click', {custom: 'data'});    // Trigger click with control over bubbling and arbitrary data

public.prototype.trigger = function(event, data)
{
    if(data !== undefined)
    {
        var params = {};

        // Check if any special options exist
        if(data.bubbles)
        {
            params.bubbles = data.bubbles;
            delete data.bubbles;
        }

        if(data.cancelable)
        {
            params.cancelable = data.cancelable;
            delete data.cancelable;
        }

        // Put remaining data into the event details
        if(Object.keys(data).length)
        {
            params.detail = data;
        }
    }
    
    // Create the event
    var event = new private.CustomEvent(event, params);

    // Loop through matched elements
    this.forEach(this.elements, function(index, element)
    {
        // Dispatch it!
        element.dispatchEvent(event);
    });
}

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
