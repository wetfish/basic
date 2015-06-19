////////////////////////////////
// append('string') - add a string to the end of all currently matched elements
// usage - $('body').append('The end!');

public.prototype.append = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        element.innerHTML = element.innerHTML + content;
    });

    return this;
}
