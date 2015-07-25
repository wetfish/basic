// Depends on: ./deps/width.js

////////////////////////////////
// width() - get the width of a specific element or all matched elements
// usage - var width = $('.single-selector').width(); // Returns an object containing the element's inner and outer width
// usage - var width = $('.multi-selector').width(); // Returns an array of objects containing the inner and outer width of all matched elements 

public.prototype.width = function(mode)
{
    // Default to inner width
    if(mode === undefined)
        mode = 'inner';

    var output = [];

    this.forEach(this.elements, function(index, element)
    {
        output.push(private.width(element, mode));
    });

    // If we were only checking the width of one element
    if(output.length == 1)
    {
        // Return only that element's width
        return output[0];
    }

    // Otherwise, return an array of widths
    return output;
}
