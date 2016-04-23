////////////////////////////////
// removeClass() - remove a class from all matched nodes
// usage - $('.selector').removeClass('example');

public.prototype.removeClass = function(classNames)
{
    classNames = classNames.split(' ');

    this.forEach(this.elements, function(element)
    {
        var classes = element.className.split(' ');

        classNames.forEach(function(className)
        {
            var index = classes.indexOf(className);

            // Only remove a class if it exists
            if(index != -1)
            {
                classes.splice(index, 1);
                element.className = classes.join(' ');
            }
        });
    });

    return this;
}
