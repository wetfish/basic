// Private function to determine element width
private.width = function(element)
{
    var width = false;
    
    // Special cases for things that aren't regular elements
    if(element == window)
    {
        width =
        {
            inner: window.innerWidth,
            outer: window.outerWidth
        }
    }

    if(element == document)
    {
        width =
        {
            inner: document.documentElement.scrollWidth,
            outer: document.documentElement.offsetWidth
        }
    }

    // Otherwise, get the computed style
    if(!width)
    {
        var style = window.getComputedStyle(element);

        width =
        {
            inner: element.offsetWidth,
            outer: element.offsetWidth + parseInt(style.marginLeft) + parseInt(style.marginRight)
        };
    }
    
    return width;
}
