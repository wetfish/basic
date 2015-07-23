// Depends on: ./off.js

////////////////////////////////
// off() - remove an event that is only fired when a child selector is matched
// usage - $('.selector').off('click', '.selector', callback);

private.eventCallbacks = [];
private.eventFunctions = [];

private.offSelector = function(events, selector, callback)
{
    events = events.split(' ');

    // Look for the index of this callback
    var functionIndex = private.eventCallbacks.indexOf(callback);

    // If the function is found
    if(functionIndex > -1)
    {
        this.forEach(events, function(index, event)
        {
            this.forEach(this.elements, function(index, element)
            {
                element.removeEventListener(event, private.eventFunctions[functionIndex]);
            });
        });

        // Remove functions from arrays
        delete private.eventCallbacks[functionIndex];
        delete private.eventFunctions[functionIndex];
    }
    
    return this;
}
