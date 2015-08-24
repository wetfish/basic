////////////////////////////////
// eq() - select something from the list of currently matched elements
// usage - $('a').eq(3).addClass('example');

public.prototype.eq = function(index)
{
    // If an existing element was found
    if(typeof this.elements[index] != "undefined")
    {
        this.elements = this.el = [this.elements[index]];
        return this;
    }

    // Otherwise unset all matched elements
    this.elements = this.el = [];
    return this;
}
