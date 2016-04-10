////////////////////////////////
// removeClass() - remove a class from all matched nodes
// usage - if($('.selector').hasClass('example')) { console.log('wow!'); }

public.prototype.hasClass = function(classes, mode)
{
    var classes = classes.split(' ');
    var match = false;

    // TODO: Break loop when match is found?
    this.forEach(this.elements, function(element, index)
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
                match = true;
            }
        }

        // Otherwise, make sure we matched all of the requested classes
        else
        {
            if(Object.keys(matches).length == classes.length)
            {
                match = true;
            }
        }
    });

    return match;
}
