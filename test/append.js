QUnit.test("Appending strings and elements", function(assert)
{
    var el = $('.append-child').el[0];
    var appendBtn = document.createElement('button');
    appendBtn.className = 'appended-button-class';
    var evt = new Event('click');
    var output = [];

    el.addEventListener('click', function()
    {
        output.push('append test');
    });

    $('.append').append('appending a string!');
    el.dispatchEvent(evt);
    assert.equal(output.length, 1, 'Check if event remains bound after appending a string');
    assert.equal($('.append').el[0].textContent.match('appending a string').length, 1, 'Check if the string was actually appended');

    $('.append').append('<u>Appending some HTML</u>');
    el.dispatchEvent(evt);
    assert.equal(output.length, 2, 'Check if event remains bound after appending html');
    assert.equal($('.append').el[0].textContent.match('Appending some HTML').length, 1, 'Check if the HTML was actually appended');

    $('.append').append(appendBtn);
    el.dispatchEvent(evt);
    assert.equal(output.length, 3, 'Check if event remains bound after appending an element');
    assert.equal($('.append button').el.length, 2, 'Check if the button was actually appended');
    assert.equal($('.append').el[0].lastChild.className, 'appended-button-class', 'Check if appended button is last child');

    $('.append-html-append').append('<p class="string-html">Appending an HTML string</p>');
    assert.equal($('.append-html-append').el[0].textContent.match('Appending an HTML string').length, 1, 'Check if text of HTML was appended');
    assert.equal($('.append-html-append .string-html').el.length, 1, 'Check if HTML was appended as HTML');
    assert.equal($('.append-html-append').el[0].lastChild.className, 'string-html', 'Check if appended HTML is last child');
});
