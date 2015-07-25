////////////////////////////////
// removeClass() - remove a class from all matched nodes
// usage - if($('.selector').hasClass('example')) { console.log('wow!'); }

public.prototype.hasClass = function(classes)
{
    var classes = classes.split(' ');
    var match = false;

    // TODO: Break loop when match is found?
    this.forEach(this.elements, function(index, element)
    {
        // Reset matches between each loop
        var matches = {};

        this.forEach(classes, function(index, className)
        {
            var classNames = element.className.split(' ');
            var index = classNames.indexOf(className);

            if(index != -1)
            {
                matches[className] = true;
            }
        });

        // Make sure we matched all of the requested classes
        if(Object.keys(matches).length == classes.length)
        {
            match = true;
        }
    });

    return match;
}
