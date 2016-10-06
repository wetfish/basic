////////////////////////////////
// append('string') - add a string to the end of all currently matched elements
// usage - $('body').append('The end!');

public.prototype.append = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(element)
    {
        var child;
        if(typeof content == "string")
        {
            // Avoid interfering with the current DOM by using a
            // DocumentFragment instead of tampering with the innerHTML
            child = new DocumentFragment();
            child.textContent = content;
        }
        else
        {
            child = content.cloneNode(true);
        }
        element.appendChild(child);
    });

    return this;
}
