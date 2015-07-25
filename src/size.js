// Depends on: ./deps/width.js, ./deps/height.js

////////////////////////////////
// size() - get the size of a specific element or all matched elements
// usage - var size = $('.single-selector').size(); // Returns an object containing the element's height and width
// usage - var size = $('.multi-selector').size(); // Returns an array of objects containing the height and width of all matched elements 

public.prototype.size = function(mode)
{
    // Default to inner size
    if(mode === undefined)
        mode = 'inner';
    
    var output = [];

    this.forEach(this.elements, function(index, element)
    {
        var size =
        {
            height: private.height(element, mode),
            width: private.width(element, mode)
        };
        
        output.push(size);
    });

    // If we were only checking the size of one element
    if(output.length == 1)
    {
        // Return only that element's size
        return output[0];
    }

    // Otherwise, return an array of sizes
    return output;
}
