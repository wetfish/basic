// Depends on: isArray

////////////////////////////////
// transform() - convenience function for handling CSS transforms
// usage - $('.selector').transform('rotate', '20deg');
// usage - $('.selector').transform({rotate: '20deg', scaleX: '2'});

private.transform =
{
    // Private function for saving new transform properties
    save: function(element, options)
    {
        // Make sure the transform property is an object
        if(typeof element.transform != "object")
        {
            element.transform = {};
        }

        // If we have an object of options
        if(typeof options[0] == "object")
        {
            // Loop through object properties and save their values
            var keys = Object.keys(options[0]);

            keys.forEach(function(property)
            {
                element.transform[property] = options[0][property];
            });
        }
        
        // Otherwise, loop through all of the options to find values
        else
        {
            var property = options[0];
            var args = [];

            for(var i = 1, l = options.length; i < l; i++)
            {
                args.push(options[i]);
            }

            element.transform[property] = args;
        }
    },

    // Private function for updating an element on the page
    update: function(element)
    {
        // Loop through all saved transform functions to generate the style text
        var funcs = Object.keys(element.transform);
        var style = [];

        funcs.forEach(function(func)
        {
            var args = element.transform[func];

            // If we have an array of arguments, join them with commas
            if(Array.isArray(args))
            {
                args = args.join(', ');
            }
            
            style.push(func + "("+args+") ");
        });

        // Update the element
        element.style['transform'] = style.join(" ");
        element.style['-webkit-transform'] = style.join(" ");
    }
}

public.prototype.transform = function()
{
    var options = arguments;
    
    this.forEach(this.elements, function(index, element)
    {
        // Add the new transform data
        private.transform.save(element, options);

        // Update the element on the page
        private.transform.update(element);
    });

    return this;
}
