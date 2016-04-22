QUnit.test("Basic selectors", function(assert)
{
    assert.equal($('#selector').el[0], document.getElementById('selector'), 'Element selected by ID');
    assert.deepEqual($('.selector').el, document.querySelectorAll('.selector'), 'Elements selected by class');    
});

QUnit.test("Other basic functions", function(assert)
{
    var input = [1, 2, 3];
    var output = [];

    var basic = new $;
    basic.forEach(input, function(value, index)
    {
        output[index] = value;
    });

    assert.deepEqual(input, output, '.forEach()');

    var one = [1];
    var two = [1, 2];

    assert.equal(basic.returnAllOrOne(one), 1, '.returnAllOrOne() with a single result');
    assert.deepEqual(basic.returnAllOrOne(two), [1, 2], '.returnAllOrOne() with two results');
});
