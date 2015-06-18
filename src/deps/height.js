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

