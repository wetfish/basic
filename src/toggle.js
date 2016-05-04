////////////////////////////////
// toggle() - will either show or hide an element every time the function is called, or switch between classes
// usage - $('.selector').toggle(); // If the element is visible, it will be hidden. If the element is hidden, it will become visible
// usage - $('.selector').toggle('class'); // If the element has the class, it will be removed, otherwise it will be added

public.prototype.toggle = function(classNames)
{
    if(classNames)
    {
        classNames = classNames.split(' ');
    }

    this.forEach(this.elements, function(element)
    {
        // If a class is being toggled
        if(classNames)
        {
            var classes = element.className.split(' ');

            classNames.forEach(function(className)
            {
                var index = classes.indexOf(className);

                // Add the class if it doesn't exist
                if(index == -1)
                {
                    classes.push(className);
                }

                // Or remove it if it does
                else
                {
                    classes.splice(index, 1);
                }
            });

            element.className = classes.join(' ');
        }

        // Otherwise, just check if the element is currently being displayed
        else
        {
            if($(element).style('display') == 'none')
            {
                $(element).style({'display': 'block'});
            }
            else
            {
                $(element).style({'display': 'none'});
            }
        }
    });

    return this;
}
