////////////////////////////////
// text('string') - replace the contents of all currently matched elements with text
//                - this differs from .html() because .text() prevents html from being added to the page
// usage - $('p').text('<b>Replaced!</b>');

public.prototype.text = function(content)
{
    // Loop through current elements
    this.forEach(this.elements, function(index, element)
    {
        element.innerHTML = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    });

    return this;
}
