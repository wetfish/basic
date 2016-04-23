QUnit.test("Handling form inputs", function(assert)
{
    var single = $('input.get.one').value();
    assert.equal(single, 'Great test', 'Getting the value of an input');

    var double = $('input.get').value();
    assert.deepEqual(double, ['Great test', 'Another test'], 'Getting the value of multiple inputs');

    $('input.set').value('Sealed forever');
    assert.equal(document.querySelector('input.set').value, 'Sealed forever', 'Setting the value of an input');
});
