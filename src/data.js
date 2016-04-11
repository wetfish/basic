////////////////////////////////
// data('attribute')            - get the value of a data attribute on all matched elements
// data('attribute', 'value')   - set the value of a data attribute on all matched elements
// usage - $('svg text').data('stroke', 4);

public.prototype.data = function(key, value)
{
    var output = [];
    
    // Loop through current elements
    this.forEach(this.elements, function(element, index)
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
                var attr = element.getAttribute('data-' + key);
                
                if(attr != null)
                {
                    element.dataset[key] = attr;
                }
            }

            output.push(element.dataset[key])
        }
        else
        {
            element.dataset[key] = value;
        }
    });

    return this.returnAllOrOne(output, false);
}
