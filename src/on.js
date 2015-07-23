////////////////////////////////
// on() - bind an event to all matched elements
// usage - $('.selector').on('click', function() { console.log('you clicked!'); });

public.prototype.on = function(events, callback)
{
    // If more than two arguments are passed, handle this event using onSelector
    if(arguments.length > 2 && private.onSelector !== undefined)
    {
        return private.onSelector.apply(this, arguments);
    }
    
    events = events.split(' ');

    this.forEach(events, function(index, event)
    {
        this.forEach(this.elements, function(index, element)
        {
            element.addEventListener(event, callback);
        });
    });

    return this;
}
