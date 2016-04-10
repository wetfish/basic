////////////////////////////////
// remove() - remove all currently matched elements
// usage - $('p').remove();

public.prototype.remove = function()
{
    // Loop through current elements
    this.forEach(this.elements, function(element, index)
    {
        element.parentNode.removeChild(element);
    });

    return this;
}
