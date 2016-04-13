////////////////////////////////
// removeClass() - remove a class from all matched nodes
// usage - $('.selector').removeClass('example');

public.prototype.removeClass = function(className)
{
    this.forEach(this.elements, function(element)
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
