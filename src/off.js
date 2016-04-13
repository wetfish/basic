////////////////////////////////
// off() - remove an event from all matched elements
// usage - $('.selector').off('click', callback);

public.prototype.off = function(events, callback)
{
    // If more than two arguments are passed, handle this event using offSelector
    if(arguments.length > 2 && private.offSelector !== undefined)
    {
        return private.offSelector.apply(this, arguments);
    }
    
    events = events.split(' ');

    this.forEach(events, function(event)
    {
        this.forEach(this.elements, function(element)
        {
            element.removeEventListener(event, callback);
        });
    });
    
    return this;
}
