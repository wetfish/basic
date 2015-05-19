
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
    
    this.elements = document.querySelectorAll(selector);
    return this;
}

// An object literal for private functions
var private =
{
    forEach: function(array, callback)
    {
        for(var i = 0, l = array.length; i < l; i++)
        {
            callback.call(public, i, array[i]);
        }
    }
};
