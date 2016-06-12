////////////////////////////////
// Check how basic should be exported

// Detect if we're in node or a browser
if(typeof module === 'object' && module.exports)
{
    // We're in Node or a CommonJS compatible environment
    module.exports = public;
}
else if(typeof define === 'function' && define.amd)
{
    // We're in a browser being loaded with AMD (Require.js)
    define(function() { return public });
}
else
{
    // We're in a browser, so put everything into global variables
    this.$ = public;
    this.basic = public;
}
