////////////////////////////////
// off() - remove an event from all matched elements
// usage - $('.selector').off('click', callback);

public.prototype.off = function(events, callback)
{
    events = events.split(' ');

    this.forEach(events, function(index, event)
    {
        this.forEach(this.elements, function(index, element)
        {
            element.removeEventListener(event, callback);
        });
    });
    
    return this;
}
