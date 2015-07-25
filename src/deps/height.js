// Private function to determine element height
private.height = function(element, mode)
{
    // Special case for the window
    if(element == window)
    {
        var height =
        {
            inner: window.innerHeight,
            outer: window.outerHeight
        };
    }
    else
    {
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
    }

    // If a valid mode was passed, return that property
    if(height[mode] !== undefined)
        return height[mode];

    // Otherwise return both
    return height;
}

