// Depends on: ./deps/customEvent.js

////////////////////////////////
// ready() - wait for the page to load before firing callback
// usage - $(document).ready, function() { console.log('Page ready!'); });

public.prototype.ready = function(callback)
{
    this.forEach(this.elements, function(element)
    {
        element.addEventListener('ready', callback);
    });
}

// Native dom loaded event
document.addEventListener('DOMContentLoaded', function()
{
    // Create a custom event with a nicer name
    var ready = new private.CustomEvent('ready');

    // Trigger it!
    document.dispatchEvent(ready);
})
