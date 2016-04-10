////////////////////////////////
// each(callback) - loop over the list of currently matched elements, calling the callback for each
// usage - $('a').each(function(element, index) { console.log(this) };

public.prototype.each = function(callback)
{
    // Loop through current elements
    this.forEach(this.elements, function(element, index)
    {
        callback.call(element, index, element);
    });

    return this;
}
