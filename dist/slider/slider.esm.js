import { DomHandler } from 'primevue/utils';
import { openBlock, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, createCommentVNode } from 'vue';

var script = {
    name: 'Slider',
    emits: ['update:modelValue', 'change', 'slideend'],
    props: {
        modelValue: [Number,Array],
		min: {
			type: Number,
			default: 0
		},
		max: {
			type: Number,
			default: 100
		},
		orientation: {
			type: String,
			default: 'horizontal'
		},
		step: {
			type: Number,
			default: null
		},
		range: {
			type: Boolean,
			default: false
		},
        disabled: {
			type: Boolean,
			default: false
        },
        ariaLabelledBy: {
            type: String,
			default: null
        }
    },
    dragging: false,
    handleIndex: null,
    initX: null,
    initY: null,
    barWidth: null,
    barHeight: null,
    dragListener: null,
    dragEndListener: null,
    beforeUnmount() {
        this.unbindDragListeners();
    },
    methods: {
        updateDomData() {
            let rect = this.$el.getBoundingClientRect();
            this.initX = rect.left + DomHandler.getWindowScrollLeft();
            this.initY = rect.top + DomHandler.getWindowScrollTop();
            this.barWidth = this.$el.offsetWidth;
            this.barHeight = this.$el.offsetHeight;
        },
        setValue(event) {
            let handleValue;
            let pageX = event.touches ? event.touches[0].pageX : event.pageX;
            let pageY = event.touches ? event.touches[0].pageY : event.pageY;
            if(this.orientation === 'horizontal')
                handleValue = ((pageX - this.initX) * 100) / (this.barWidth);
            else
                handleValue = (((this.initY + this.barHeight) - pageY) * 100) / (this.barHeight);
            let newValue = (this.max - this.min) * (handleValue / 100) + this.min;
            if (this.step) {
                const oldValue = this.range ? this.modelValue[this.handleIndex] : this.modelValue;
                const diff = (newValue - oldValue);
                if (diff < 0)
                    newValue = oldValue + Math.ceil(newValue / this.step - oldValue / this.step) * this.step;
                else if (diff > 0)
                    newValue = oldValue + Math.floor(newValue / this.step - oldValue / this.step) * this.step;
            }
            else {
                newValue = Math.floor(newValue);
            }
            this.updateModel(event, newValue);
        },
        updateModel(event, value) {
            let newValue = parseFloat(value.toFixed(10));
            let modelValue;

            if (this.range) {
                modelValue = this.modelValue ? [...this.modelValue] : [];

                if (this.handleIndex == 0) {
                    let maxValue = this.modelValue ? this.modelValue[1] : this.max;

                    if (newValue < this.min)
                        newValue = this.min;
                    else if (newValue >= maxValue)
                        newValue = maxValue;

                    modelValue[0] = newValue;
                    modelValue[1] = modelValue[1] || this.max;
                }
                else {
                    let minValue = this.modelValue ? this.modelValue[0] : this.min;
                    if (newValue > this.max)
                        newValue = this.max;
                    else if (newValue <= minValue)
                        newValue = minValue;

                    modelValue[0] = modelValue[0] || this.min;
                    modelValue[1] = newValue;
                }
            }
            else {
                if (newValue < this.min)
                    newValue = this.min;
                else if (newValue > this.max)
                    newValue = this.max;

                modelValue = newValue;
            }

            this.$emit('update:modelValue', modelValue);
            this.$emit('change', modelValue);
        },
        onDragStart(event, index) {
            if (this.disabled) {
                return;
            }

            DomHandler.addClass(this.$el, 'p-slider-sliding');
            this.dragging = true;
            this.updateDomData();

            if (this.range && this.modelValue[0] === this.max) {
                this.handleIndex = 0;
            }
            else {
                this.handleIndex = index;
            }

            event.preventDefault();
        },
        onDrag(event) {
            if (this.dragging) {
                this.setValue(event);
                event.preventDefault();
            }
        },
        onDragEnd(event) {
            if (this.dragging) {
                this.dragging = false;
                DomHandler.removeClass(this.$el, 'p-slider-sliding');
                this.$emit('slideend', {originalEvent: event, value: this.modelValue});
            }
        },
        onBarClick(event) {
            if (this.disabled) {
                return;
            }
            if (!DomHandler.hasClass(event.target, 'p-slider-handle')) {
                this.updateDomData();
                this.setValue(event);
            }
        },
        onMouseDown(event, index) {
            this.bindDragListeners();
            this.onDragStart(event, index);
        },
        onKeyDown(event, index) {
            this.handleIndex = index;
            switch (event.which) {
                //down
                case 40:
                    if (this.vertical) {
                        this.decrementValue(event, index);
                        event.preventDefault();
                    }
                break;
                //up
                case 38:
                    if (this.vertical) {
                        this.incrementValue(event, index);
                        event.preventDefault();
                    }
                break;
                //left
                case 37:
                    if (this.horizontal) {
                        this.decrementValue(event, index);
                        event.preventDefault();
                    }
                break;
                //right
                case 39:
                    if (this.horizontal) {
                        this.incrementValue(event, index);
                        event.preventDefault();
                    }
                break;
            }
        },
        decrementValue(event, index) {
            let newValue;
            if (this.range) {
                if (this.step)
                    newValue = this.modelValue[index] - this.step;
                else
                    newValue = this.modelValue[index] - 1;
            }
            else {
                if (this.step)
                    newValue = this.modelValue - this.step;
                else
                    newValue = this.modelValue - 1;
            }
            this.updateModel(event, newValue);
            event.preventDefault();
        },
        incrementValue(event, index) {
            let newValue;
            if (this.range) {
                if (this.step)
                    newValue = this.modelValue[index] + this.step;
                else
                    newValue = this.modelValue[index] + 1;
            }
            else {
                if (this.step)
                    newValue = this.modelValue + this.step;
                else
                    newValue = this.modelValue + 1;
            }
            this.updateModel(event, newValue);
            event.preventDefault();
        },
        bindDragListeners() {
            if (!this.dragListener) {
                this.dragListener = this.onDrag.bind(this);
                document.addEventListener('mousemove', this.dragListener);
            }
            if (!this.dragEndListener) {
                this.dragEndListener = this.onDragEnd.bind(this);
                document.addEventListener('mouseup', this.dragEndListener);
            }
        },
        unbindDragListeners() {
            if (this.dragListener) {
                document.removeEventListener('mousemove', this.dragListener);
                this.dragListener = null;
            }
            if (this.dragEndListener) {
                document.removeEventListener('mouseup', this.dragEndListener);
                this.dragEndListener = null;
            }
        }
    },
    computed: {
        containerClass() {
            return ['p-slider p-component', {
                'p-disabled': this.disabled,
                'p-slider-horizontal': (this.orientation === 'horizontal'),
                'p-slider-vertical': (this.orientation === 'vertical')
            }];
        },
        horizontal() {
            return this.orientation === 'horizontal';
        },
        vertical() {
            return this.orientation === 'vertical';
        },
        rangeStyle() {
            if (this.range) {
                if (this.horizontal)
                    return {'left': this.rangeStartPosition + '%', width: (this.rangeEndPosition - this.rangeStartPosition + '%')};
                else
                    return {'bottom': this.rangeStartPosition + '%', height: (this.rangeEndPosition - this.rangeStartHandlePosition + '%')};
            }
            else {
                if (this.horizontal)
                    return {'width': this.handlePosition + '%'};
                else
                    return {'height': this.handlePosition + '%'};
            }
        },
        handleStyle() {
            if (this.horizontal)
                return {'left': this.handlePosition + '%'};
            else
                return {'bottom': this.handlePosition + '%'};
        },
        handlePosition() {
            if (this.modelValue < this.min)
                return 0;
            else if (this.modelValue > this.max)
                return 100;
            else
                return (this.modelValue - this.min) * 100 / (this.max - this.min);
        },
        rangeStartPosition() {
            if (this.modelValue && this.modelValue[0])
                return (this.modelValue[0] < this.min ? 0 : this.modelValue[0] - this.min) * 100 / (this.max - this.min);
            else
                return 0;
        },
        rangeEndPosition() {
            if (this.modelValue && this.modelValue[1])
                return (this.modelValue[1] > this.max ? 100 : this.modelValue[1] - this.min) * 100 / (this.max - this.min);
            else
                return 100;
        },
        rangeStartHandleStyle() {
            if (this.horizontal)
                return {'left': this.rangeStartPosition + '%'};
            else
                return {'bottom': this.rangeStartPosition + '%'};
        },
        rangeEndHandleStyle() {
            if (this.horizontal)
                return {'left': this.rangeEndPosition + '%'};
            else
                return {'bottom': this.rangeEndPosition + '%'};
        },
    }
};

const _hoisted_1 = ["aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby"];
const _hoisted_2 = ["aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby"];
const _hoisted_3 = ["aria-valuemin", "aria-valuenow", "aria-valuemax", "aria-labelledby"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", {
    class: normalizeClass($options.containerClass),
    onClick: _cache[15] || (_cache[15] = (...args) => ($options.onBarClick && $options.onBarClick(...args)))
  }, [
    createElementVNode("span", {
      class: "p-slider-range",
      style: normalizeStyle($options.rangeStyle)
    }, null, 4),
    (!$props.range)
      ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "p-slider-handle",
          style: normalizeStyle($options.handleStyle),
          onTouchstart: _cache[0] || (_cache[0] = $event => ($options.onDragStart($event))),
          onTouchmove: _cache[1] || (_cache[1] = $event => ($options.onDrag($event))),
          onTouchend: _cache[2] || (_cache[2] = $event => ($options.onDragEnd($event))),
          onMousedown: _cache[3] || (_cache[3] = $event => ($options.onMouseDown($event))),
          onKeydown: _cache[4] || (_cache[4] = $event => ($options.onKeyDown($event))),
          tabindex: "0",
          role: "slider",
          "aria-valuemin": $props.min,
          "aria-valuenow": $props.modelValue,
          "aria-valuemax": $props.max,
          "aria-labelledby": $props.ariaLabelledBy
        }, null, 44, _hoisted_1))
      : createCommentVNode("", true),
    ($props.range)
      ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "p-slider-handle",
          style: normalizeStyle($options.rangeStartHandleStyle),
          onTouchstart: _cache[5] || (_cache[5] = $event => ($options.onDragStart($event, 0))),
          onTouchmove: _cache[6] || (_cache[6] = $event => ($options.onDrag($event))),
          onTouchend: _cache[7] || (_cache[7] = $event => ($options.onDragEnd($event))),
          onMousedown: _cache[8] || (_cache[8] = $event => ($options.onMouseDown($event, 0))),
          onKeydown: _cache[9] || (_cache[9] = $event => ($options.onKeyDown($event))),
          tabindex: "0",
          role: "slider",
          "aria-valuemin": $props.min,
          "aria-valuenow": $props.modelValue ? $props.modelValue[0] : null,
          "aria-valuemax": $props.max,
          "aria-labelledby": $props.ariaLabelledBy
        }, null, 44, _hoisted_2))
      : createCommentVNode("", true),
    ($props.range)
      ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: "p-slider-handle",
          style: normalizeStyle($options.rangeEndHandleStyle),
          onTouchstart: _cache[10] || (_cache[10] = $event => ($options.onDragStart($event, 1))),
          onTouchmove: _cache[11] || (_cache[11] = $event => ($options.onDrag($event))),
          onTouchend: _cache[12] || (_cache[12] = $event => ($options.onDragEnd($event))),
          onMousedown: _cache[13] || (_cache[13] = $event => ($options.onMouseDown($event, 1))),
          onKeydown: _cache[14] || (_cache[14] = $event => ($options.onKeyDown($event, 1))),
          tabindex: "0",
          role: "slider",
          "aria-valuemin": $props.min,
          "aria-valuenow": $props.modelValue ? $props.modelValue[1] : null,
          "aria-valuemax": $props.max,
          "aria-labelledby": $props.ariaLabelledBy
        }, null, 44, _hoisted_3))
      : createCommentVNode("", true)
  ], 2))
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

var css_248z = "\n.p-slider {\n\tposition: relative;\n}\n.p-slider .p-slider-handle {\n\tposition: absolute;\n\tcursor: -webkit-grab;\n\tcursor: grab;\n    -ms-touch-action: none;\n        touch-action: none;\n    display: block;\n}\n.p-slider-range {\n\tposition: absolute;\n    display: block;\n}\n.p-slider-horizontal .p-slider-range {\n    top: 0;\n    left: 0;\n\theight: 100%;\n}\n.p-slider-horizontal .p-slider-handle {\n    top: 50%;\n}\n.p-slider-vertical {\n\theight: 100px;\n}\n.p-slider-vertical .p-slider-handle {\n    left: 50%;\n}\n.p-slider-vertical .p-slider-range {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n}\n";
styleInject(css_248z);

script.render = render;

export { script as default };
