////////////////////////////////
// index() - find the index an element
// usage - var index = $('.element').index();

public.prototype.index = function()
{
    var output = [];

    this.forEach(this.elements, function(element)
    {
        this.forEach(element.parentNode.children, function(child, index)
        {
            if(element == child)
            {
                output.push(index);
            }
        });
    });

    // If we only one element was matched
    if(output.length == 1)
    {
        // Return only that element's index
        return output[0];
    }

    // Otherwise, return an array of indexes
    return output;
}
