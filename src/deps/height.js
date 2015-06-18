// Private function to determine element height
private.height = function(element)
{
    var height = false;

    // Special cases for things that aren't regular elements
    if(element == window)
    {
        height =
        {
            inner: window.innerHeight,
            outer: window.outerHeight
        }
    }

    if(element == document)
    {
        height =
        {
            inner: document.documentElement.scrollHeight,
            outer: document.documentElement.offsetHeight
        }
    }

    // Otherwise, get the computed style
    if(!height)
    {
        var style = window.getComputedStyle(element);
        var height =
        {
            inner: element.offsetHeight,
            outer: element.offsetHeight + parseInt(style.marginTop) + parseInt(style.marginBottom)
        };
    }
    
    return height;
}

