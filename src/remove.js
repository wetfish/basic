////////////////////////////////
// remove() - remove all currently matched elements
// usage - $('p').remove();

public.prototype.remove = function()
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        element.parentNode.removeChild(element);
    });

    return this;
}
