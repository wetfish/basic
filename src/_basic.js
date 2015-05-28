
////////////////////////////////
// Wetfish Basic
// Core functionality

// A constructor for public functions
var public = function(selector)
{
    if (!(this instanceof public))
    {
        return new public(selector)
    }

    // If the selector is a string
    if(typeof selector == "string")
    {
        // Try matching some elements on the page
        this.elements = document.querySelectorAll(selector);
    }
    else
    {
        // Assume an element was passed (like the value of this in an event)
        this.elements = [selector];
    }

    return this;
}

// Helper function to loop through elements
public.prototype.forEach = function(array, callback)
{
    for(var i = 0, l = array.length; i < l; i++)
    {
        callback.call(this, i, array[i]);
    }
}

// An object literal for private functions
var private = { };
