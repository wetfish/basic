////////////////////////////////
// on() - bind an event to all matched elements
// usage - $('.selector').on('click', function() { console.log('you clicked!'); });

public.prototype.on = function(event, callback)
{
    private.forEach(this.elements, function(index, element)
    {
        element.addEventListener(event, callback);
    });

    return this;
}
