# foundation-inline-svg

A simple foundation plugin wrapping around https://github.com/iconic/SVGInjector for inlining SVGs into your HTML, making them accessible to CSS and JavaScript.

## Installation

First, install via bower or npm

```
npm install foundation-inline-svg
```
OR
```
bower install foundation-inline-svg
```

Next, include the plugin in your javascript after Foundation but before `$(document).foundation()`

e.g.
```
<script src="bower_components/dist/standalone/foundation.inline-svg.js"></script>
```

## Usage

The usage is super simple.  Just add a `data-inline-svg` attribute to any image tags that point to an SVG.  They will be replaced with the inline code from the SVG, while preserving attributes like classnames etc.

```
<img src="yeti.svg" data-inline-svg />
```

### TODO:

Todos include

* Preserve event handlers on the original image tags
* Trigger events when the replacement actually happens
