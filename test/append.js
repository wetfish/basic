QUnit.test("Appending strings and elements", function(assert)
{
    var el = $('.append-child').el[0];
    var appendBtn = document.createElement('button');
    var evt = new Event('click');
    var output = [];

    el.addEventListener('click', function()
    {
        output.push('append test');
    });

    $('.append').append('appending a string!');
    el.dispatchEvent(evt);
    assert.equal(output.length, 1, 'Check if event remains bound after appending a string');

    $('.append').append(appendBtn);
    el.dispatchEvent(evt);
    assert.equal(output.length, 2, 'Check if event remains bound after appending an element');
});
