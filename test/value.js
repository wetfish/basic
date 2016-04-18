QUnit.test("Getting input value", function(assert)
{
    var single = $('input.get.one').value();
    assert.equal(single, 'Great test', 'Single value matched');

    var double = $('input.get').value();
    assert.deepEqual(double, ['Great test', 'Another test'], 'Multiple values matched');
});

QUnit.test("Setting input value", function(assert)
{
    $('input.set').value('Sealed forever');
    assert.equal(document.querySelector('input.set').value, 'Sealed forever', 'Value set');
});
