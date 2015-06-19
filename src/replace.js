////////////////////////////////
// replace('string') - replace all currently matched elements with the string
// usage - $('.start').replace("<div class='stop'>Replaced!</div>');

public.prototype.replace = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        element.outerHTML = content;
    });

    return this;
}
