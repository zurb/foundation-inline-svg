'use strict';
var SVGInjector = require('node-modules/svg-injector/svg-injector');

!function($) {

/**
 * InlineSVG module.
 * @module foundation.inline-svg
 */

class InlineSVG {
  /**
   * Creates a new instance of INlineSVG.
   * @class
   * @param {Object} element - jQuery object to add the trigger to.
   * @param {Object} options - Overrides to the default plugin settings.
   */
  constructor(element, options) {
    this.$element = element;
    this.options = $.extend({}, InlineSVG.defaults, element.data(), options);
    this.className = '';

    this._init();
    this._events();

    Foundation.registerPlugin(this, 'InlineSVG');
  }

  /**
   * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
   * @function
   * @private
   */
  _init() {
    this.$oldElement = this.$element.clone();
    var _this = this;
    SVGInjector(this.$element, {each: function(svg) {
      _this.$element = $(svg);
    }});
  }

  /**
   * Initializes events for the toggle trigger.
   * @function
   * @private
   */
  _events() {
  }


  /**
   * Destroys the instance of InlineSVG on the element.
   * @function
   */
  destroy() {
    this.$element.replaceWith(this.$oldElement);
    Foundation.unregisterPlugin(this);
  }
}

InlineSVG.defaults = {
};

// Window exports
Foundation.plugin(Toggler, 'InlineSVG');

}(jQuery);
