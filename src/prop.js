////////////////////////////////
// prop('property')         - get a property of all matched elements
// prop('key', 'value')     - set the property of all matched elements
// usage - $('.checkbox').prop('checked', true);

public.prototype.prop = function(key, value)
{
    var output = [];
    
    // Loop through current elements
    this.forEach(this.elements, function(element, index)
    {
        // If no value is specified, return the current property of the element
        if(value === undefined)
        {
            output.push(element[key]);
        }
        // Otherwise, set the property 
        else
        {
            element[key] = value;
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
