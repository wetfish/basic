////////////////////////////////
// html('string') - replace the contents of all currently matched elements
// usage - $('p').html('<b>Replaced!</b>');

public.prototype.html = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        element.innerHTML = content;
    });

    return this;
}