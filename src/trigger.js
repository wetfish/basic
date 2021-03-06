// Depends on: ./deps/customEvent.js

////////////////////////////////
// trigger() - trigger an event on matched elements
// usage - $('.some-button').trigger('click');                      // Trigger the click event on .some-button
// usage - $('.some-button').trigger('click', {custom: 'data'});    // Trigger click with control over bubbling and arbitrary data

public.prototype.trigger = function(event, data)
{
    if(data !== undefined)
    {
        if(typeof data === "object")
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
        }

        // Put data into the event details
        params.detail = data;
    }
    
    // Create the event
    var event = new private.CustomEvent(event, params);

    // Loop through matched elements
    this.forEach(this.elements, function(element)
    {
        // Dispatch it!
        element.dispatchEvent(event);
    });
}
