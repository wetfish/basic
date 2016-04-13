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

    this.forEach(this.elements, function(element)
    {
        output.push(private.width(element, mode));
    });

    return this.returnAllOrOne(output);
}
