////////////////////////////////
// clone(deep) - clone an element
// usage - var clone = $('.element').clone();

public.prototype.clone = function(deep)
{
    if(deep === undefined)
    {
        deep = true;
    }
    
    var output = [];

    this.forEach(this.elements, function(element)
    {
        output.push(element.cloneNode(deep));
    });

    return this.returnAllOrOne(output);
}
