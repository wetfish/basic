////////////////////////////////
// find() - find a selector within another element
// usage - $('nav').find('a').addClass('example');

public.prototype.find = function(selector)
{
    // Clear existing elements array
    var elements = this.elements;
    this.elements = [];

    // Loop through the original elements
    this.forEach(elements, function(element)
    {
        var children = element.querySelectorAll(selector);

        // Loop through any matching children and push them to the list of elements
        this.forEach(children, function(child)
        {
            this.elements.push(child);
        });
    });

    // Update the shorthand elements container
    this.el = this.elements;
    return this;
}
