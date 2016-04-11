
////////////////////////////////
// Wetfish Basic
// Core functionality

// A constructor for public functions
var public = wetfish = function(selector)
{
    if (!(this instanceof public))
    {
        return new public(selector)
    }

    // If the selector is a string
    if(typeof selector == "string")
    {
        // Try matching some elements on the page
        this.el = this.elements = document.querySelectorAll(selector);
    }
    else
    {
        // Assume an element was passed (like the value of this in an event)
        this.el = this.elements = [selector];
    }

    this.length = this.el.length;
    return this;
}

// Helper function to loop through elements
public.prototype.forEach = function(array, callback)
{
    for(var i = 0, l = array.length; i < l; i++)
    {
        callback.call(this, array[i], i);
    }
}

// Helper function to return either a single element or an array based on the length of the input given
// Output should be an array
// Fallback is the default value returned if there is no output
public.prototype.returnAllOrOne = function(output, fallback)
{
    if(output.length)
    {
        if(output.length == 1)
        {
            return output[0];
        }

        return output;
    }

    if(fallback !== undefined)
    {
        return fallback;
    }
}

// An object literal for private functions
var private = { };
