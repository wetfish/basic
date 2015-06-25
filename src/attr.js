////////////////////////////////
// attr('attribute')            - get the value of an attribute on all matched elements
// attr('attribute', 'value')   - set the value of an attribute on all matched elements
// usage - $('svg text').attr('stroke', 4);

public.prototype.attr = function(key, value)
{
    var output = [];
    
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        // If no value is specified, return the current value of the attribute
        if(value === undefined)
        {
            output.push(element.getAttribute(key))
        }
        else
        {
            // If the value is true, create the attribute without any value
            if(value === true)
            {
                element.setAttribute(key, '');
            }
            // If the value is false, remove the attribute
            else if(value === false)
            {
                element.removeAttribute(key);
            }
            // Otherwise set the value as is
            else
            {
                element.setAttribute(key, value);
            }
        }
    });

    if(output.length)
    {
        // If only one element was matched, return that value
        if(output.length == 1)
        {
            return output[0];
        }

        // Otherwise return an array of matched values
        return output;
    }

    return this;
}
