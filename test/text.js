QUnit.test("Getting Text Content", function(assert)
{
    var output = $('.text').text();

    var expected =  "I am textContent";

    assert.deepEqual(output, expected, 'Got textContent with .text()');
});
