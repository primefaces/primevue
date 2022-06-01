import TerminalService from 'primevue/terminalservice';
import { openBlock, createElementBlock, toDisplayString, createCommentVNode, createElementVNode, Fragment, renderList, withDirectives, vModelText } from 'vue';

var script = {
    name: 'Terminal',
    props: {
        welcomeMessage: {
            type: String,
            default: null
        },
        prompt: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            commandText: null,
            commands: []
        }
    },
    mounted() {
        TerminalService.on('response', this.responseListener);
        this.$refs.input.focus();
    },
    updated() {
        this.$el.scrollTop = this.$el.scrollHeight;
    },
    beforeUnmount() {
        TerminalService.off('response', this.responseListener);
    },
    methods: {
        onClick() {
            this.$refs.input.focus();
        },
        onKeydown(event) {
            if (event.keyCode === 13 && this.commandText) {
                this.commands.push({text: this.commandText});
                TerminalService.emit('command', this.commandText);
                this.commandText = '';
            }
        },
        responseListener(response) {
            this.commands[this.commands.length - 1].response = response;
        }
    }
};

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "p-terminal-content" };
const _hoisted_3 = { class: "p-terminal-prompt" };
const _hoisted_4 = { class: "p-terminal-command" };
const _hoisted_5 = { class: "p-terminal-response" };
const _hoisted_6 = { class: "p-terminal-prompt-container" };
const _hoisted_7 = { class: "p-terminal-prompt" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: "p-terminal p-component",
    onClick: _cache[2] || (_cache[2] = (...args) => ($options.onClick && $options.onClick(...args)))
  }, [
    ($props.welcomeMessage)
      ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString($props.welcomeMessage), 1))
      : createCommentVNode("", true),
    createElementVNode("div", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.commands, (command, i) => {
        return (openBlock(), createElementBlock("div", {
          key: command.text + i.toString()
        }, [
          createElementVNode("span", _hoisted_3, toDisplayString($props.prompt), 1),
          createElementVNode("span", _hoisted_4, toDisplayString(command.text), 1),
          createElementVNode("div", _hoisted_5, toDisplayString(command.response), 1)
        ]))
      }), 128))
    ]),
    createElementVNode("div", _hoisted_6, [
      createElementVNode("span", _hoisted_7, toDisplayString($props.prompt), 1),
      withDirectives(createElementVNode("input", {
        ref: "input",
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.commandText) = $event)),
        class: "p-terminal-input",
        autocomplete: "off",
        onKeydown: _cache[1] || (_cache[1] = (...args) => ($options.onKeydown && $options.onKeydown(...args)))
      }, null, 544), [
        [vModelText, $data.commandText]
      ])
    ])
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

var css_248z = "\n.p-terminal {\n    height: 18rem;\n    overflow: auto;\n}\n.p-terminal-prompt-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.p-terminal-input {\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    border: 0 none;\n    background-color: transparent;\n    color: inherit;\n    padding: 0;\n    outline: 0 none;\n}\n.p-terminal-input::-ms-clear {\n    display: none;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
