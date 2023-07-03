import { DomHandler } from 'primevue/utils';
import BaseRipple from './BaseRipple';

const Ripple = BaseRipple.extend('ripple', {
    mounted(el, binding) {
        const primevue = binding.instance.$primevue;

        if (primevue && primevue.config && primevue.config.ripple) {
            el.$_prippleUnstyled = primevue.config.unstyled || false;

            this.create(el, binding);
            this.bindEvents(el);
        }
    },
    unmounted(el) {
        this.remove(el);
    },
    timeout: undefined,
    methods: {
        bindEvents(el) {
            el.addEventListener('mousedown', this.onMouseDown.bind(this));
        },
        unbindEvents(el) {
            el.removeEventListener('mousedown', this.onMouseDown.bind(this));
        },
        create(el, binding) {
            const ink = DomHandler.createElement('span', {
                role: 'presentation',
                'aria-hidden': true,
                'data-p-ink': true,
                'data-p-ink-active': false,
                class: this.cx('root'),
                onAnimationEnd: this.onAnimationEnd,
                'p-bind': this.ptm('root')
            });

            el.appendChild(ink);

            this.$el = ink;
        },
        remove(el) {
            let ink = this.getInk(el);

            if (ink) {
                this.unbindEvents(el);
                ink.removeEventListener('animationend', this.onAnimationEnd);
                ink.remove();
            }
        },
        onMouseDown(event) {
            let target = event.currentTarget;
            let ink = this.getInk(target);

            if (!ink || getComputedStyle(ink, null).display === 'none') {
                return;
            }

            !target.$_prippleUnstyled && DomHandler.removeClass(ink, 'p-ink-active');
            ink.setAttribute('data-p-ink-active', 'false');

            if (!DomHandler.getHeight(ink) && !DomHandler.getWidth(ink)) {
                let d = Math.max(DomHandler.getOuterWidth(target), DomHandler.getOuterHeight(target));

                ink.style.height = d + 'px';
                ink.style.width = d + 'px';
            }

            let offset = DomHandler.getOffset(target);
            let x = event.pageX - offset.left + document.body.scrollTop - DomHandler.getWidth(ink) / 2;
            let y = event.pageY - offset.top + document.body.scrollLeft - DomHandler.getHeight(ink) / 2;

            ink.style.top = y + 'px';
            ink.style.left = x + 'px';

            !target.$_prippleUnstyled && DomHandler.addClass(ink, 'p-ink-active');
            ink.setAttribute('data-p-ink-active', 'true');

            this.timeout = setTimeout(() => {
                if (ink) {
                    !target.$_prippleUnstyled && DomHandler.removeClass(ink, 'p-ink-active');
                    ink.setAttribute('data-p-ink-active', 'false');
                }
            }, 401);
        },
        onAnimationEnd(event) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            !event.currentTarget.$_prippleUnstyled && DomHandler.removeClass(event.currentTarget, 'p-ink-active');
            event.currentTarget.setAttribute('data-p-ink-active', 'false');
        },
        getInk(el) {
            for (let i = 0; i < el.children.length; i++) {
                if (el.children[i].getAttribute('data-pc-name') === 'ripple') {
                    return el.children[i];
                }
            }

            return null;
        }
    }
});

export default Ripple;
