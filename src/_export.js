////////////////////////////////
// Check how basic should be exported

// Detect if we're in node or a browser
if(typeof module !== 'undefined' && module.exports)
{
    // We're in node or a CommonJS compatable environment
    module.exports = public;
}
else
{
    // We're in a browser, so put everything into global variables
    this.$ = public;
    this.basic = public;
}
