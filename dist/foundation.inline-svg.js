'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVGInjector = require('svg-injector/svg-injector');

!function ($) {

  /**
   * InlineSVG module.
   * @module foundation.inline-svg
   */

  var InlineSVG = function () {
    /**
     * Creates a new instance of INlineSVG.
     * @class
     * @param {Object} element - jQuery object to add the trigger to.
     * @param {Object} options - Overrides to the default plugin settings.
     */
    function InlineSVG(element, options) {
      _classCallCheck(this, InlineSVG);

      console.log('constructing inlineSVG');
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


    _createClass(InlineSVG, [{
      key: '_init',
      value: function _init() {
        this.$oldElement = this.$element.clone();
        var _this = this;
        SVGInjector(this.$element, { each: function each(svg) {
            _this.$element = $(svg);
          } });
      }

      /**
       * Initializes events for the toggle trigger.
       * @function
       * @private
       */

    }, {
      key: '_events',
      value: function _events() {}

      /**
       * Destroys the instance of InlineSVG on the element.
       * @function
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this.$element.replaceWith(this.$oldElement);
        Foundation.unregisterPlugin(this);
      }
    }]);

    return InlineSVG;
  }();

  InlineSVG.defaults = {};

  // Window exports
  Foundation.plugin(InlineSVG, 'InlineSVG');
}(jQuery);