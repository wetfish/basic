QUnit.test("Basic selectors", function(assert)
{
    assert.equal($('#selector').el[0], document.getElementById('selector'), 'Element selected by ID');
    assert.deepEqual($('.selector').el, document.querySelectorAll('.selector'), 'Elements selected by class');    
});
