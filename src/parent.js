////////////////////////////////
// parent() - get the direct parent of all matched elements
// usage - $('.selector').parent();

public.prototype.parent = function()
{
    var elements = [];

    this.forEach(this.elements, function(element, index)
    {
        elements[index] = element.parentNode;
    });

    this.elements = this.el = elements;
    return this;
}
