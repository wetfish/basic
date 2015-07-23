// Depends on: ./on.js

////////////////////////////////
// on() - bind an event that is only fired when a child selector is matched
// usage - $('body').on('click', '.selector' function() { console.log('you clicked!'); });

private.onSelector = function(events, selector, callback)
{
    events = events.split(' ');

    this.forEach(events, function(index, event)
    {
        this.forEach(this.elements, function(index, element)
        {
            element.addEventListener(event, function(e)
            {
                var children = document.querySelectorAll(selector);

                for(var i = 0, l = children.length; i < l; i++)
                {
                    var child = children[i];

                    if(e.target == child)
                    {
                        callback(e);
                    }
                }
            });
        });
    });

    return this;
}
