////////////////////////////////
// scroll() - get the scroll position of a specific element or all matched elements
// usage - var scroll = $('.single-selector').scroll(); // Returns an object containing the element's scrollTop and scrollLeft
// usage - var scroll = $('.multi-selector').scroll(); // Returns an array of objects containing the scrollTop and scrollLeft of all matched elements 

public.prototype.scroll = function()
{
    var output = [];

    this.forEach(this.elements, function(element, index)
    {
        // The window is a special case that doesn't have scrollTop / scrollLeft properties
        if(element == window)
        {
            var scroll =
            {
                top: element.pageYOffset,
                left: element.pageXOffset
            };
        }
        else
        {
            var scroll =
            {
                top: element.scrollTop,
                left: element.scrollLeft
            };
        }
        
        output.push(scroll);
    });

    return this.returnAllOrOne(output);
}
