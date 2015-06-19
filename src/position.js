////////////////////////////////
// position(relative)   - get the position of a specific element or all matched elements
//                      - optionally specify if the position should be relative to the 'viewport' or the 'page' (default) 
// usage - var position = $('.single-selector').position(); // Returns an object containing the element's inner and outer position
// usage - var position = $('.multi-selector').position(); // Returns an array of objects containing the inner and outer position of all matched elements 

public.prototype.position = function(relative)
{
    var output = [];
    relative = relative || 'page';

    this.forEach(this.elements, function(index, element)
    {
        var position = element.getBoundingClientRect();

        if(relative == "page")
        {
            // Add the scroll position to top / left
            position.left += window.scrollX;
            position.top += window.scrollY;
        }
        
        output.push(position);
    });

    // If we were only checking the position of one element
    if(output.length == 1)
    {
        // Return only that element's position
        return output[0];
    }

    // Otherwise, return an array of positions
    return output;
}
