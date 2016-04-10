////////////////////////////////
// parents() - loop through all parents until a matching selector is found
// usage - $('.selector').parents('.container');

private.parent = function(element, parent)
{
    if(!element)
    {
        return false;
    }

    if(element.parentNode == parent)
    {
        return parent;
    }
    else
    {
        return private.parent(element.parentNode, parent);
    }
}

public.prototype.parents = function(selector)
{
    var elements = [];
    var parents = document.querySelectorAll(selector);

    this.forEach(this.elements, function(element)
    {
        this.forEach(parents, function(parent)
        {
            var matched = private.parent(element, parent);

            if(matched)
            {
                elements.push(parent);
            }
        });
    });

    this.elements = this.el = elements;
    return this;
}
