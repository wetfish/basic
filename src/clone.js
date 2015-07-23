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

    this.forEach(this.elements, function(index, element)
    {
        output.push(element.cloneNode(deep));
    });

    // If we only one element was cloned
    if(output.length == 1)
    {
        // Return only that element
        return output[0];
    }

    // Otherwise, return an array of clones
    return output;
}
