////////////////////////////////
// replace('string') - replace all currently matched elements with the string
// usage - $('.start').replace("<div class='stop'>Replaced!</div>');

public.prototype.replace = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        if(typeof content == "string")
        {
            element.outerHTML = content;
        }
        else
        {
            element.outerHTML = content.outerHTML;
        }
    });

    return this;
}
