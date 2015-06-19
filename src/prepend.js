////////////////////////////////
// prepend('string') - add a string to the beginning of all currently matched elements
// usage - $('body').prepend('Dear user,');

public.prototype.prepend = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        element.innerHTML = content + element.innerHTML;
    });

    return this;
}
