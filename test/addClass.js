QUnit.test("Setting classes", function(assert)
{
    $('.class.one').addClass('test');    
    assert.equal($('.class.one').el[0].className, 'class one test', 'Single class added');

    $('.class.two').addClass('another test');
    assert.equal($('.class.two').el[0].className, 'class two another test', 'Multiple classes added');

    $('.class.three').addClass('function').addClass('chaining');
    assert.equal($('.class.three').el[0].className, 'class three function chaining', 'Multiple classes added via function chaining');

    $('.class').addClass('multiple');

    var expected =
    [
        'class one test multiple',
        'class two another test multiple',
        'class three function chaining multiple',
    ];

    var output = [];

    var basic = new $;
    basic.forEach($('.class').el, function(element)
    {
        output.push(element.className);
    })

    assert.deepEqual(output, expected, 'Added a class to multiple elements');
});
