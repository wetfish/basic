////////////////////////////////
// value()                  - get the value of an input on all matched elements
// value('something')       - set the value of an input on all matched elements
// usage - $('textarea').value('this is some text!');

public.prototype.value = function(value)
{
    var output = [];
    
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        // If no value is specified, return the current value of the input
        if(value === undefined)
        {
            output.push(element.value);
        }
        // Otherwise, set the value 
        else
        {
            element.value = value;
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
