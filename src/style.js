////////////////////////////////
// style() - get or set styles for matched elements
// usage - $('a').style({'color': 'red', 'font-size': '30pt'}); // Set the style for all matched elements to 30pt and red
// usage - $('.unique-selector').style('color');                // Get the color attribute for a single element
// usage - $('a').style('color');                               // Get an array of the color attributes for all matched elements

public.prototype.style = function(style)
{
    // If we're setting an object of styles
    if(typeof style == "object")
    {
        var properties = Object.keys(style);

        this.forEach(properties, function(property)
        {
            this.forEach(this.elements, function(element, index)
            {
                element.style[property] = style[property];
            });
        });

        return this;
    }

    // Otherwise, we must be getting the value of a property
    else if(typeof style == "string")
    {
        var output = [];

        this.forEach(this.elements, function(element, index)
        {
            var current = window.getComputedStyle(element);
            output.push(current[style]);
        });

        // If we were only checking the style of one element
        if(output.length == 1)
        {
            // Return only that element's style
            return output[0];
        }

        // Otherwise, return an array of styles
        return output;
    }
}
