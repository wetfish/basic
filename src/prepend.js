////////////////////////////////
// prepend('string') - add a string to the beginning of all currently matched elements
// usage - $('body').prepend('Dear user,');

public.prototype.prepend = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(element)
    {
        var child;
        if(typeof content == "string")
        {
            var range = document.createRange();
            range.selectNode(document.body);
            child = range.createContextualFragment(content);
        }
        else
        {
            child = content.cloneNode(true);
        }
        element.insertBefore(child, element.firstChild);
    });

    return this;
}
