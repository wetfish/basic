////////////////////////////////
// transform() - convenience function for handling CSS transforms
// usage - $('.selector').transform('rotate', '20deg');

public.prototype.transform = function()
{
    var func = arguments[0];
    var args = [];

    // Loop through remaining arguments, ignoring the first
    for(var i = 1, l = arguments.length; i < l; i++)
    {
        args.push(arguments[i]);
    }
    
    this.forEach(this.elements, function(index, element)
    {
        // Make sure the transform property is an object
        if(typeof element.transform != "object")
        {
            element.transform = {};
        }

        // Add the new transform data
        element.transform[func] = args;
        delete args;

        // Loop through all saved transform functions to generate the style text
        var funcs = Object.keys(element.transform);
        var style = [];

        this.forEach(funcs, function(index, func)
        {
            var args = element.transform[func];
            style.push(func + "("+args.join(', ')+") ");
        });

        // Update the element
        element.style['transform'] = style.join(" ");
    });

    return this;
}
