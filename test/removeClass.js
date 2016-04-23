QUnit.test("Removing classes", function(assert)
{
    $('.remove .class').removeClass('multiple');

    var expected =
    [
        'class one test',
        'class two awesome test',
        'class three function chaining',
    ];

    var output = [];

    var basic = new $;
    basic.forEach($('.remove .class').el, function(element)
    {
        output.push(element.className);
    })

    assert.deepEqual(output, expected, 'Removed a class from multiple elements');
    
    $('.remove .class.one').removeClass('test');
    assert.equal($('.remove .class.one').el[0].className, 'class one', 'Single class removed');

    $('.remove .class.two').removeClass('awesome test');
    assert.equal($('.remove .class.two').el[0].className, 'class two', 'Multiple classes removed');

    $('.remove .class.three').removeClass('function').removeClass('chaining');
    assert.equal($('.remove .class.three').el[0].className, 'class three', 'Multiple classes removed via function chaining');
});
