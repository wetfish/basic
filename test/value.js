QUnit.test("getting form value", function(assert)
{
    var single = $('input.one').value();
    assert.equal(single, 'Great test', 'Single value matched');

    var double = $('input.one, input.two').value();
    assert.deepEqual(double, ['Great test', 'Another test'], 'Multiple values matched');
});
