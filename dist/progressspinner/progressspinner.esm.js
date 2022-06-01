import { openBlock, createElementBlock, normalizeStyle, createElementVNode } from 'vue';

var script = {
    name: 'ProgressSpinner',
    props: {
        strokeWidth: {
            type: String,
            default: '2'
        },
        fill: {
            type: String,
            default: 'none'
        },
        animationDuration: {
            type: String,
            default: '2s'
        }
    },
    computed: {
        svgStyle() {
            return {
                'animation-duration': this.animationDuration
            };
        }
    }
};

const _hoisted_1 = {
  class: "p-progress-spinner",
  role: "alert",
  "aria-busy": "true"
};
const _hoisted_2 = ["fill", "stroke-width"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock("svg", {
      class: "p-progress-spinner-svg",
      viewBox: "25 25 50 50",
      style: normalizeStyle($options.svgStyle)
    }, [
      createElementVNode("circle", {
        class: "p-progress-spinner-circle",
        cx: "50",
        cy: "50",
        r: "20",
        fill: $props.fill,
        "stroke-width": $props.strokeWidth,
        strokeMiterlimit: "10"
      }, null, 8, _hoisted_2)
    ], 4))
  ]))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.p-progress-spinner {\n    position: relative;\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n}\n.p-progress-spinner::before {\n     content: '';\n     display: block;\n     padding-top: 100%;\n}\n.p-progress-spinner-svg {\n    -webkit-animation: p-progress-spinner-rotate 2s linear infinite;\n            animation: p-progress-spinner-rotate 2s linear infinite;\n    height: 100%;\n    -webkit-transform-origin: center center;\n            transform-origin: center center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n.p-progress-spinner-circle {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: 0;\n    stroke: #d62d20;\n    -webkit-animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;\n            animation: p-progress-spinner-dash 1.5s ease-in-out infinite, p-progress-spinner-color 6s ease-in-out infinite;\n    stroke-linecap: round;\n}\n@-webkit-keyframes p-progress-spinner-rotate {\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@keyframes p-progress-spinner-rotate {\n100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n}\n}\n@-webkit-keyframes p-progress-spinner-dash {\n0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n}\n50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n}\n100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n}\n}\n@keyframes p-progress-spinner-dash {\n0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n}\n50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n}\n100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n}\n}\n@-webkit-keyframes p-progress-spinner-color {\n100%,\n    0% {\n        stroke: #d62d20;\n}\n40% {\n        stroke: #0057e7;\n}\n66% {\n        stroke: #008744;\n}\n80%,\n    90% {\n        stroke: #ffa700;\n}\n}\n@keyframes p-progress-spinner-color {\n100%,\n    0% {\n        stroke: #d62d20;\n}\n40% {\n        stroke: #0057e7;\n}\n66% {\n        stroke: #008744;\n}\n80%,\n    90% {\n        stroke: #ffa700;\n}\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
