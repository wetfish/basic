////////////////////////////////
// size() - get the size of a specific element or all matched elements
// usage - var size = $('.single-selector').size(); // Returns an object containing the element's height and width
// usage - var size = $('.multi-selector').size(); // Returns an array of objects containing the height and width of all matched elements 

// Private function to determine element height
private.height = function(element)
{
    var style = element.currentStyle || window.getComputedStyle(element);
    var height =
    {
        inner: element.offsetHeight,
        outer: element.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)
    };

    return height;
}

// Private function to determine element width
private.width = function(element)
{
    var style = element.currentStyle || window.getComputedStyle(element);
    var width =
    {
        inner: element.offsetWidth,
        outer: element.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
    };

    return width;
}

// Public function which generates size objects
public.prototype.size = function()
{
    var output = [];

    this.forEach(this.elements, function(index, element)
    {
        var size =
        {
            height: private.height(element),
            width: private.width(element)
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
