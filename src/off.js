////////////////////////////////
// off() - remove an event from all matched elements
// usage - $('.selector').off('click', callback);

public.prototype.off = function(event, callback)
{
    private.forEach(this.elements, function(index, element)
    {
        element.removeEventListener(event, callback);
    });

    return this;
}
