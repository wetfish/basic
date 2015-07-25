// Private function to determine element width
private.width = function(element, mode)
{
    // Special case for the window
    if(element == window)
    {
        var width =
        {
            inner: window.innerWidth,
            outer: window.outerWidth
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
        var width =
        {
            inner: element.offsetWidth,
            outer: element.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
        };
    }

    // If a valid mode was passed, return that property
    if(width[mode] !== undefined)
        return width[mode];

    // Otherwise return both
    return width;
}
