// Depends on: ./deps/height.js

////////////////////////////////
// height() - get the height of a specific element or all matched elements
// usage - var height = $('.single-selector').height(); // Returns an object containing the element's inner and outer height
// usage - var height = $('.multi-selector').height(); // Returns an array of objects containing the inner and outer height of all matched elements 

public.prototype.height = function(mode)
{
    // Default to inner height
    if(mode === undefined)
        mode = 'inner';
    
    var output = [];

    this.forEach(this.elements, function(element, index)
    {
        output.push(private.height(element, mode));
    });

    // If we were only checking the height of one element
    if(output.length == 1)
    {
        // Return only that element's height
        return output[0];
    }

    // Otherwise, return an array of heights
    return output;
}
