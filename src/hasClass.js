////////////////////////////////
// removeClass() - remove a class from all matched nodes
// usage - if($('.selector').hasClass('example')) { console.log('wow!'); }

public.prototype.hasClass = function(className)
{
    var match = false;

    // TODO: Break loop when match is found?
    this.forEach(this.elements, function(index, element)
    {
        var classes = element.className.split(' ');
        var index = classes.indexOf(className);

        if(index != -1)
        {
            match = true;
        }
    });

    return match;
}
