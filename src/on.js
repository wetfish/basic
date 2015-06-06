////////////////////////////////
// on() - bind an event to all matched elements
// usage - $('.selector').on('click', function() { console.log('you clicked!'); });

public.prototype.on = function(events, callback)
{
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
