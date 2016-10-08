QUnit.test("Prepending strings and elements", function(assert)
{
    var el = $('.prepend-child').el[0];
    var prependBtn = document.createElement('button');
    prependBtn.className = 'prepended-button-class';
    var evt = new Event('click');
    var output = [];

    el.addEventListener('click', function()
    {
        output.push('prepend test');
    });

    $('.prepend').prepend('prepending a string!');
    el.dispatchEvent(evt);
    assert.equal(output.length, 1, 'Check if event remains bound after prepending a string');
    assert.equal($('.prepend').el[0].textContent.match('prepending a string').length, 1, 'Check if the string was actually prepended');

    $('.prepend').prepend('<u>Prepending some HTML</u>');
    el.dispatchEvent(evt);
    assert.equal(output.length, 2, 'Check if event remains bound after prepending html');
    assert.equal($('.prepend').el[0].textContent.match('Prepending some HTML').length, 1, 'Check if the HTML was actually prepended');

    $('.prepend').prepend(prependBtn);
    el.dispatchEvent(evt);
    assert.equal(output.length, 3, 'Check if event remains bound after prepending an element');
    assert.equal($('.prepend button').el.length, 2, 'Check if the button was actually prepended');
    assert.equal($('.prepend').el[0].firstChild.className, 'prepended-button-class', 'Check if prepended button is first child');

    $('.prepend-html-prepend').prepend('<p class="string-html">Prepending an HTML string</p>');
    assert.equal($('.prepend-html-prepend').el[0].textContent.match('Prepending an HTML string').length, 1, 'Check if text of HTML was prepended');
    assert.equal($('.prepend-html-prepend .string-html').el.length, 1, 'Check if HTML was appended as HTML');
    assert.equal($('.prepend-html-prepend').el[0].firstChild.className, 'string-html', 'Check if prepended HTML is first child');
});
