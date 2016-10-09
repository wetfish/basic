////////////////////////////////
// hasClass() - checks whether at least one of the matching element has
//              one or all of the given classes, depending on mode
// usage - if($('.selector').hasClass('example')) { console.log('wow!'); }

public.prototype.hasClass = function(classes, mode)
{
    var classes = classes.split(' ');

    return this.some(this.elements, function(element)
    {
        // Reset matches between each loop
        var matches = {};

        this.forEach(classes, function(className)
        {
            var classNames = element.className.split(' ');
            var index = classNames.indexOf(className);

            if(index != -1)
            {
                matches[className] = true;
            }
        });

        // If this is an inclusive match
        if(mode == 'or')
        {
            if(Object.keys(matches).length)
            {
                return true;
            }
        }

        // Otherwise, make sure we matched all of the requested classes
        else
        {
            if(Object.keys(matches).length == classes.length)
            {
                return true;
            }
        }

        return false;
    });
}
