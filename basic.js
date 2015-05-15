// Basic.js
// From wetfish.net, with love

(function()
{
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

    public.prototype.noConflict = function()
    {
        return public;
    }

    public.prototype.addClass = function(className)
    {
        private.forEach(this.elements, function(index, element)
        {
            var classes = element.className.split(' ');
            var index = classes.indexOf(className);

            // Only add a class if it doesn't exist
            if(index == -1)
            {
                classes.push(className);
                element.className = classes.join(' ');
            }
        });
                
        return this;
    }

    public.prototype.removeClass = function(className)
    {
        private.forEach(this.elements, function(index, element)
        {
            var classes = element.className.split(' ');
            var index = classes.indexOf(className);

            // Only remove a class if it exists
            if(index != -1)
            {
                classes.splice(index, 1);
                element.className = classes.join(' ');
            }
        });

        return this;
    }

    private.height = function(element)
    {
        var style = element.currentStyle || window.getComputedStyle(element);
        var height =
        {
            inner: element.offsetHeight,
            outer: element.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)
        };

        return height;
    }

    private.width = function(element)
    {
        var style = element.currentStyle || window.getComputedStyle(element);
        var width =
        {
            inner: element.offsetWidth,
            outer: element.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
        };

        return width;
    }

    public.prototype.size = function()
    {
        var output = [];

        private.forEach(this.elements, function(index, element)
        {
            var size =
            {
                height: private.height(element),
                width: private.width(element)
            };
            
            output.push(size);
        });

        // If we were only checking the size of one element
        if(output.length == 1)
        {
            // Return only that element's size
            return output[0];
        }

        // Otherwise, return an array of sizes
        return output;
    }

    // Detect if we're in node or a browser
    if(typeof module !== 'undefined' && module.exports)
    {
        // We're in node or a CommonJS compatable environment
        module.exports = public;
    }
    else
    {
        // We're in a browser, so put everything into the root object
        this.$ = public;
        this.basic = public;
    }
})();
