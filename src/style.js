////////////////////////////////
// style() - set styles for matched elements
// usage - $('a').style({'color': 'red', 'font-size': '30pt'});

public.prototype.style = function(style)
{
    var keys = Object.keys(style);

    this.forEach(keys, function(key, property)
    {
        this.forEach(this.elements, function(index, element)
        {
            element.style[property] = style[property];
        });
    });
    
    return this;
}
