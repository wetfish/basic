# Basic

A lightweight JavaScript framework that lets you control exactly what you need.

## Getting Started

You can start developing with basic by using the included [basic.js file](dist/basic.js). This file comes prebuilt with all available functions. If you need to customize which functions are available, see the building section below.

## Usage

Basic can be used much in the same way as jQuery including selectors and function chaining.

```javascript
$('.selector').on('click', function()
{
   $('.example').addClass('active'); 
});
```

Some functions are different than their jQuery counterparts, most notably .size(), which returns an object of the element's height / width instead of separate .width() and .height() functions.

## Building

Basic is designed to be customizable, allowing you to specifically choose which functions you need. This is ideal for environments where bandwidth is at a premium, like advertising or satellite broadcasting.

To generate a custom build, you can specify which files you want to load in gulp:

```
gulp build --files "addClass, removeClass, on"
```

The output can then be found in **./dist/basic.generated.js**
