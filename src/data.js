////////////////////////////////
// data('attribute')            - get the value of a data attribute on all matched elements
// data('attribute', 'value')   - set the value of a data attribute on all matched elements
// usage - $('svg text').data('stroke', 4);

public.prototype.data = function(key, value)
{
    var output = [];
    
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        // Make sure the dataset is an object (for old versions of IE)
        if(element.dataset === undefined)
        {
            element.dataset = {};
        }
        
        // If no value is specified, return the current value of the data attribute
        if(value === undefined)
        {
            // If this key isn't found
            if(element.dataset[key] === undefined)
            {
                // Check to see if it exists as an attribute (for old versions of IE)
                element.dataset[key] = element.getAttribute('data-' + key);
            }

            output.push(element.dataset[key])
        }
        else
        {
            element.dataset[key] = value;
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
