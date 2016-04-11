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

    return this.returnAllOrOne(output);
}
