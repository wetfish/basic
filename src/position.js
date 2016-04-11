////////////////////////////////
// position(relative)   - get the position of a specific element or all matched elements
//                      - optionally specify if the position should be relative to the 'viewport' or the 'page' (default) 
// usage - var position = $('.single-selector').position(); // Returns an object containing the element's inner and outer position
// usage - var position = $('.multi-selector').position(); // Returns an array of objects containing the inner and outer position of all matched elements 

public.prototype.position = function(relative)
{
    var output = [];
    relative = relative || 'page';

    this.forEach(this.elements, function(element, index)
    {
        var rect = element.getBoundingClientRect();

        // DOM Rects are immutable, so we have to copy the data
        var position =
        {
            top: rect.top,
            left: rect.left,
            right: rect.right,
            bottom: rect.bottom
        };

        if(relative == "page")
        {
            // Add the scroll position to top / left
            position.left += window.scrollX;
            position.top += window.scrollY;
        }
        
        output.push(position);
    });

    return this.returnAllOrOne(output);
}
