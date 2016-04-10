////////////////////////////////
// prepend('string') - add a string to the beginning of all currently matched elements
// usage - $('body').prepend('Dear user,');

public.prototype.prepend = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(element, index)
    {
        if(typeof content == "string")
        {
            element.innerHTML = content + element.innerHTML;
        }
        else
        {
            element.insertBefore(content.cloneNode(true), element.firstChild);
        }
    });

    return this;
}
