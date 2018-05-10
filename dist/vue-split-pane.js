(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueSplitPane = factory());
}(this, (function () { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    data: function data () {
      return {
        gutter: 11,
        split: 50,
        dragging: false
      }
    },
    computed: {
      splitLeft: function () {
        return ("calc(" + (this.split) + "% - " + (this.gutter) + "px)")
      },
      splitRight: function () {
        return ("calc(" + (100 - this.split) + "% - " + (this.gutter) + "px)")
      }
    },
    methods: {
      dragStart: function dragStart (e) {
        this.dragging = true;
        this.startX = e.pageX;
        this.startSplit = this.split;
      },
      dragMove: function dragMove (e) {
        if (this.dragging) {
          var dx = e.pageX - this.startX;
          var totalWidth = this.$el.offsetWidth;
          this.split = this.startSplit + ~~(dx / totalWidth * 100);
        }
      },
      dragEnd: function dragEnd () {
        this.dragging = false;
      }
    }
  }

  var __vue_script__ = script;
              
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c(
      "div",
      {
        staticClass: "split-pane",
        class: { "is-dragging": _vm.dragging },
        on: {
          mousemove: _vm.dragMove,
          mouseup: _vm.dragEnd,
          mouseleave: _vm.dragEnd
        }
      },
      [
        _c(
          "div",
          { staticClass: "split-pane-item", style: { width: _vm.splitLeft } },
          [_vm._t("left")],
          2
        ),
        _vm._v(" "),
        _c("div", {
          staticClass: "split-pane-gutter",
          on: { mousedown: _vm.dragStart }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "split-pane-item", style: { width: _vm.splitRight } },
          [_vm._t("right")],
          2
        )
      ]
    )
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_template__ = typeof __vue_render__ !== 'undefined'
    ? { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }
    : {};
  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-655a609d_0", { source: "\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n.split-pane {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n}\n.split-pane-item,\n.split-pane-gutter {\n  height: 100%;\n}\n.split-pane-gutter {\n  background: #000;\n  opacity: .2;\n  z-index: 1;\n  box-sizing: border-box;\n  background-clip: padding-box;\n  width: 11px;\n  margin: 0 -5px;\n  border-left: 5px solid rgba(255, 255, 255, 0);\n  border-right: 5px solid rgba(255, 255, 255, 0);\n  cursor: col-resize;\n}\n.split-pane-gutter:hover,\n.split-pane-gutter:focus {\n  border-left: 5px solid rgba(0, 0, 0, 0.5);\n  border-right: 5px solid rgba(0, 0, 0, 0.5);\n  transition: all 2s ease;\n}\n.is-dragging {\n  cursor: col-resize;\n}\n", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* component normalizer */
  function __vue_normalize__(
    template, style, script$$1,
    scope, functional, moduleIdentifier,
    createInjector, createInjectorSSR
  ) {
    var component = script$$1 || {};

    {
      component.__file = "/Users/dangvanthanh/Code/dev/vue/vue-split-pane/src/SplitPane.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;

      if (functional) { component.functional = true; }
    }

    component._scopeId = scope;

    {
      var hook;
      if (style) {
        hook = function(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;
          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context)
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component
  }
  /* style inject */
  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = {};
    var isOldIE =
      typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) { return } // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = { ids: [], parts: [], element: undefined });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;

        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';

          if (css.media) { el.setAttribute('media', css.media); }
          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts
            .filter(Boolean)
            .join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) { style.element.removeChild(nodes[index]); }
          if (nodes.length) { style.element.insertBefore(textNode, nodes[index]); }
          else { style.element.appendChild(textNode); }
        }
      }
    }
  }
  /* style inject SSR */


  var SplitPane = __vue_normalize__(
    __vue_template__,
    __vue_inject_styles__,
    typeof __vue_script__ === 'undefined' ? {} : __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {},
    typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {}
  )

  return SplitPane;

})));
