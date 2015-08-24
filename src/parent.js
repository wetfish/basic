////////////////////////////////
// parent() - get the direct parent of all matched elements
// usage - $('.selector').parent();

public.prototype.parent = function()
{
    var elements = [];

    this.forEach(this.elements, function(index, element)
    {
        elements[index] = element.parentNode;
    });

    this.elements = this.el = elements;
    return this;
}
