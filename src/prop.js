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

    return this.returnAllOrOne(output, this);
}
