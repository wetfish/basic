(function()
{
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

    // Polyfill from MDN for IE support
    // See: https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
    private.CustomEvent = function(event, params)
    {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }

    private.CustomEvent.prototype = window.Event.prototype;

    // Private function to determine element height
    private.height = function(element)
    {
        // Special case for the window
        if(element == window)
        {
            var height =
            {
                inner: window.innerHeight,
                outer: window.outerHeight
            };

            return height;
        }

        // Document should actually reference the documentElement
        if(element == document)
        {
            element = document.documentElement;
        }

        // Now get the computed style
        var style = window.getComputedStyle(element);
        var height =
        {
            inner: element.offsetHeight,
            outer: element.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)
        };
       
        return height;
    }


    // Private function to determine element width
    private.width = function(element)
    {
        // Special case for the window
        if(element == window)
        {
            var width =
            {
                inner: window.innerWidth,
                outer: window.outerWidth
            };

            return width;
        }

        // Document should actually reference the documentElement
        if(element == document)
        {
            element = document.documentElement;
        }

        // Now get the computed style
        var style = window.getComputedStyle(element);
        var width =
        {
            inner: element.offsetWidth,
            outer: element.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
        };
        
        return width;
    }

    ////////////////////////////////
    // Check how basic should be exported

    // Detect if we're in node or a browser
    if(typeof module !== 'undefined' && module.exports)
    {
        // We're in node or a CommonJS compatable environment
        module.exports = public;
    }
    else
    {
        // We're in a browser, so put everything into global variables
        this.$ = public;
        this.basic = public;
    }

    ////////////////////////////////
    // addClass() - add a class to all matched nodes
    // usage - $('.selector').addClass('example');

    public.prototype.addClass = function(className)
    {
        this.forEach(this.elements, function(index, element)
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

    ////////////////////////////////
    // append('string') - add a string to the end of all currently matched elements
    // usage - $('body').append('The end!');

    public.prototype.append = function(content)
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            element.innerHTML = element.innerHTML + content;
        });

        return this;
    }

    ////////////////////////////////
    // each(callback) - loop over the list of currently matched elements, calling the callback for each
    // usage - $('a').each(function(index, element) { console.log(this) };

    public.prototype.each = function(callback)
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            callback.call(element, index, element);
        });

        return this;
    }

    ////////////////////////////////
    // eq() - select something from the list of currently matched elements
    // usage - $('a').eq(3).addClass('example');

    public.prototype.eq = function(index)
    {
        // If an existing element was found
        if(typeof this.elements[index] != "undefined")
        {
            this.elements = [this.elements[index]];
            return this;
        }

        // Otherwise unset all matched elements
        this.elements = [];
        return this;
    }

    ////////////////////////////////
    // find() - find a selector within another element
    // usage - $('nav').find('a').addClass('example');

    public.prototype.find = function(selector)
    {
        // Clear existing elements array
        var elements = this.elements;
        this.elements = [];

        // Loop through the original elements
        this.forEach(elements, function(index, element)
        {
            var children = element.querySelectorAll(selector);

            // Loop through any matching children and push them to the list of elements
            this.forEach(children, function(childIndex, childElement)
            {
                this.elements.push(childElement);
            });
        });

        return this;
    }

    ////////////////////////////////
    // removeClass() - remove a class from all matched nodes
    // usage - if($('.selector').hasClass('example')) { console.log('wow!'); }

    public.prototype.hasClass = function(className)
    {
        var match = false;

        // TODO: Break loop when match is found?
        this.forEach(this.elements, function(index, element)
        {
            var classes = element.className.split(' ');
            var index = classes.indexOf(className);

            if(index != -1)
            {
                match = true;
            }
        });

        return match;
    }

    // Depends on: private.height

    ////////////////////////////////
    // height() - get the height of a specific element or all matched elements
    // usage - var height = $('.single-selector').height(); // Returns an object containing the element's inner and outer height
    // usage - var height = $('.multi-selector').height(); // Returns an array of objects containing the inner and outer height of all matched elements 

    public.prototype.height = function()
    {
        var output = [];

        this.forEach(this.elements, function(index, element)
        {
            output.push(private.height(element));
        });

        // If we were only checking the height of one element
        if(output.length == 1)
        {
            // Return only that element's height
            return output[0];
        }

        // Otherwise, return an array of heights
        return output;
    }

    ////////////////////////////////
    // html('string') - replace the contents of all currently matched elements
    // usage - $('p').html('<b>Replaced!</b>');

    public.prototype.html = function(content)
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            element.innerHTML = content;
        });

        return this;
    }

    ////////////////////////////////
    // noConflict() - returns public class
    // usage - var customVar = basic.noConflict();

    public.prototype.noConflict = function()
    {
        return public;
    }

    ////////////////////////////////
    // off() - remove an event from all matched elements
    // usage - $('.selector').off('click', callback);

    public.prototype.off = function(events, callback)
    {
        events = events.split(' ');

        this.forEach(events, function(index, event)
        {
            this.forEach(this.elements, function(index, element)
            {
                element.removeEventListener(event, callback);
            });
        });
        
        return this;
    }

    ////////////////////////////////
    // on() - bind an event to all matched elements
    // usage - $('.selector').on('click', function() { console.log('you clicked!'); });

    public.prototype.on = function(events, callback)
    {
        events = events.split(' ');

        this.forEach(events, function(index, event)
        {
            this.forEach(this.elements, function(index, element)
            {
                element.addEventListener(event, callback);
            });
        });

        return this;
    }

    ////////////////////////////////
    // position(relative)   - get the position of a specific element or all matched elements
    //                      - optionally specify if the position should be relative to the 'viewport' or the 'page' (default) 
    // usage - var position = $('.single-selector').position(); // Returns an object containing the element's inner and outer position
    // usage - var position = $('.multi-selector').position(); // Returns an array of objects containing the inner and outer position of all matched elements 

    public.prototype.position = function(relative)
    {
        var output = [];
        relative = relative || 'page';

        this.forEach(this.elements, function(index, element)
        {
            var rect = element.getBoundingClientRect();

            // DOM Rects are immutable, so we have to copy the data
            var position =
            {
                top: rect.top,
                left: rect.left,
                right: rect.right,
                bottom: rect.bottom
            };

            if(relative == "page")
            {
                // Add the scroll position to top / left
                position.left += window.scrollX;
                position.top += window.scrollY;
            }
            
            output.push(position);
        });

        // If we were only checking the position of one element
        if(output.length == 1)
        {
            // Return only that element's position
            return output[0];
        }

        // Otherwise, return an array of positions
        return output;
    }

    ////////////////////////////////
    // prepend('string') - add a string to the beginning of all currently matched elements
    // usage - $('body').prepend('Dear user,');

    public.prototype.prepend = function(content)
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            element.innerHTML = content + element.innerHTML;
        });

        return this;
    }

    // Depends on: private.CustomEvent

    ////////////////////////////////
    // ready() - wait for the page to load before firing callback
    // usage - $(document).ready, function() { console.log('Page ready!'); });

    public.prototype.ready = function(callback)
    {
        this.forEach(this.elements, function(index, element)
        {
            element.addEventListener('ready', callback);
        });
    }

    // Native dom loaded event
    document.addEventListener('DOMContentLoaded', function()
    {
        // Create a custom event with a nicer name
        var ready = new private.CustomEvent('ready');

        // Trigger it!
        document.dispatchEvent(ready);
    })

    ////////////////////////////////
    // remove() - remove all currently matched elements
    // usage - $('p').remove();

    public.prototype.remove = function()
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            element.parentNode.removeChild(element);
        });

        return this;
    }

    ////////////////////////////////
    // removeClass() - remove a class from all matched nodes
    // usage - $('.selector').removeClass('example');

    public.prototype.removeClass = function(className)
    {
        this.forEach(this.elements, function(index, element)
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

    ////////////////////////////////
    // replace('string') - replace all currently matched elements with the string
    // usage - $('.start').replace("<div class='stop'>Replaced!</div>');

    public.prototype.replace = function(content)
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            element.outerHTML = content;
        });

        return this;
    }

    ////////////////////////////////
    // scroll() - get the scroll position of a specific element or all matched elements
    // usage - var scroll = $('.single-selector').scroll(); // Returns an object containing the element's scrollTop and scrollLeft
    // usage - var scroll = $('.multi-selector').scroll(); // Returns an array of objects containing the scrollTop and scrollLeft of all matched elements 

    public.prototype.scroll = function()
    {
        var output = [];

        this.forEach(this.elements, function(index, element)
        {
            // The window is a special case that doesn't have scrollTop / scrollLeft properties
            if(element == window)
            {
                var scroll =
                {
                    top: element.pageYOffset,
                    left: element.pageXOffset
                };
            }
            else
            {
                var scroll =
                {
                    top: element.scrollTop,
                    left: element.scrollLeft
                };
            }
            
            output.push(scroll);
        });

        // If we were only checking the position of one element
        if(output.length == 1)
        {
            // Return only that element's position
            return output[0];
        }

        // Otherwise, return an array of positions
        return output;
    }

    // Depends on: private.width and private.height

    ////////////////////////////////
    // size() - get the size of a specific element or all matched elements
    // usage - var size = $('.single-selector').size(); // Returns an object containing the element's height and width
    // usage - var size = $('.multi-selector').size(); // Returns an array of objects containing the height and width of all matched elements 

    public.prototype.size = function()
    {
        var output = [];

        this.forEach(this.elements, function(index, element)
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

    ////////////////////////////////
    // style() - get or set styles for matched elements
    // usage - $('a').style({'color': 'red', 'font-size': '30pt'}); // Set the style for all matched elements to 30pt and red
    // usage - $('.unique-selector').style('color');                // Get the color attribute for a single element
    // usage - $('a').style('color');                               // Get an array of the color attributes for all matched elements

    public.prototype.style = function(style)
    {
        // If we're setting an object of styles
        if(typeof style == "object")
        {
            var keys = Object.keys(style);

            this.forEach(keys, function(key, property)
            {
                this.forEach(this.elements, function(index, element)
                {
                    element.style[property] = style[property];
                });
            });

            return this;
        }

        // Otherwise, we must be getting the value of a property
        else if(typeof style == "string")
        {
            var output = [];

            this.forEach(this.elements, function(index, element)
            {
                var current = window.getComputedStyle(element);
                output.push(current[style]);
            });

            // If we were only checking the style of one element
            if(output.length == 1)
            {
                // Return only that element's style
                return output[0];
            }

            // Otherwise, return an array of styles
            return output;
        }
    }

    ////////////////////////////////
    // text('string') - replace the contents of all currently matched elements with text
    //                - this differs from .html() because .text() prevents html from being added to the page
    // usage - $('p').text('<b>Replaced!</b>');

    public.prototype.text = function(content)
    {
        // Loop through current elements
        this.forEach(this.elements, function(index, element)
        {
            element.innerHTML = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        });

        return this;
    }

    // Depends on: private.customEvent

    ////////////////////////////////
    // trigger() - trigger an event on matched elements
    // usage - $('.some-button').trigger('click');                      // Trigger the click event on .some-button
    // usage - $('.some-button').trigger('click', {custom: 'data'});    // Trigger click with control over bubbling and arbitrary data

    public.prototype.trigger = function(event, data)
    {
        if(data !== undefined)
        {
            var params = {};

            // Check if any special options exist
            if(data.bubbles)
            {
                params.bubbles = data.bubbles;
                delete data.bubbles;
            }

            if(data.cancelable)
            {
                params.cancelable = data.cancelable;
                delete data.cancelable;
            }

            // Put remaining data into the event details
            if(Object.keys(data).length)
            {
                params.detail = data;
            }
        }
        
        // Create the event
        var event = new private.CustomEvent(event, params);

        // Loop through matched elements
        this.forEach(this.elements, function(index, element)
        {
            // Dispatch it!
            element.dispatchEvent(event);
        });
    }

    // Depends on: private.width

    ////////////////////////////////
    // width() - get the width of a specific element or all matched elements
    // usage - var width = $('.single-selector').width(); // Returns an object containing the element's inner and outer width
    // usage - var width = $('.multi-selector').width(); // Returns an array of objects containing the inner and outer width of all matched elements 

    public.prototype.width = function()
    {
        var output = [];

        this.forEach(this.elements, function(index, element)
        {
            output.push(private.width(element));
        });

        // If we were only checking the width of one element
        if(output.length == 1)
        {
            // Return only that element's width
            return output[0];
        }

        // Otherwise, return an array of widths
        return output;
    }
})();