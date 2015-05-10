# Random Backgrounds

Plain backgrounds are plain. Spice up your pages with random backgrounds.


## Files

There are three generators:
- `bg-circles.js`
- `bg-grid.js`
- `bg-squares.js`

And one controller: `bg-loader.js`.

And one test page: `bg-test.html`.


## Installation

1. Download the files
2. Add them to your pages
3. There is no step 3


## Use

Each generator receives an object specifying things like the number of elements to create, upper and lower bounds for colors, the element to append the elements it generates to, etc. There are sample parameters at the bottom of each file. Or you can pass it nothing and let the generator generate the values it needs itself.

The only thing that you *must* provide is the target element.

This looks best when the target element spans the full height and width of the page.


## Samples
- [Circles](http://richardmavis.info/circles)
- [Grids](http://richardmavis.info/grids)
- [Squares](http://richardmavis.info/squares)

Refresh the pages a few times. They're pretty.


## Bonus

The `bg-loader.js` file contains a few functions used by the generators, but can also randomly choose a random generator. So rather than calling, e.g., `new Circles()`, you can call `new BackgroundLoader()`, and in return you'll get a random random background.
