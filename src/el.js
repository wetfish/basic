////////////////////////////////
// el() - select something from the list of currently matched elements
// usage - $('a').el(3).addClass('example');

public.prototype.el = function(index)
{
    // If an existing element was found
    if(typeof this.elements[index] != "undefined")
    {
        this.elements = [this.elements[index]];
        return this;
    }

    // Otherwise unset all matched elements
    this.elements = [];
    return this;
}
