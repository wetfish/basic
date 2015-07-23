// Depends on: ./on.js

////////////////////////////////
// on() - bind an event that is only fired when a child selector is matched
// usage - $('body').on('click', '.selector' function() { console.log('you clicked!'); });

private.eventCallbacks = [];
private.eventFunctions = [];

private.onSelector = function(events, selector, callback)
{
    events = events.split(' ');

    private.eventCallbacks.push(callback);
    var functionIndex = private.eventFunctions.push(function(event)
    {
        var children = document.querySelectorAll(selector);

        for(var i = 0, l = children.length; i < l; i++)
        {
            var child = children[i];

            if(event.target == child)
            {
                callback(event);
            }
        }
    });

    // Subtract 1 because push returns the array length
    functionIndex--;

    this.forEach(events, function(index, event)
    {
        this.forEach(this.elements, function(index, element)
        {
            element.addEventListener(event, private.eventFunctions[functionIndex]);
        });
    });

    return this;
}
