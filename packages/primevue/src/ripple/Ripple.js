import { addClass, createElement, getAttribute, getHeight, getOffset, getOuterHeight, getOuterWidth, getWidth, removeClass } from '@primeuix/utils/dom';
import BaseRipple from './BaseRipple';

const Ripple = BaseRipple.extend('ripple', {
    watch: {
        'config.ripple'(newValue) {
            if (newValue) {
                this.createRipple(this.$host);
                this.bindEvents(this.$host);

                this.$host.setAttribute('data-pd-ripple', true);
                this.$host.style['overflow'] = 'hidden';
                this.$host.style['position'] = 'relative';
            } else {
                this.remove(this.$host);
                this.$host.removeAttribute('data-pd-ripple');
            }
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
        createRipple(el) {
            const ink = createElement('span', {
                role: 'presentation',
                'aria-hidden': true,
                'data-p-ink': true,
                'data-p-ink-active': false,
                class: !this.isUnstyled() && this.cx('root'),
                onAnimationEnd: this.onAnimationEnd.bind(this),
                [this.$attrSelector]: '',
                'p-bind': this.ptm('root')
            });

            el.appendChild(ink);

            this.$el = ink;
        },
        remove(el) {
            let ink = this.getInk(el);

            if (ink) {
                this.$host.style['overflow'] = '';
                this.$host.style['position'] = '';

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

            !this.isUnstyled() && removeClass(ink, 'p-ink-active');
            ink.setAttribute('data-p-ink-active', 'false');

            if (!getHeight(ink) && !getWidth(ink)) {
                let d = Math.max(getOuterWidth(target), getOuterHeight(target));

                ink.style.height = d + 'px';
                ink.style.width = d + 'px';
            }

            let offset = getOffset(target);
            let x = event.pageX - offset.left + document.body.scrollTop - getWidth(ink) / 2;
            let y = event.pageY - offset.top + document.body.scrollLeft - getHeight(ink) / 2;

            ink.style.top = y + 'px';
            ink.style.left = x + 'px';

            !this.isUnstyled() && addClass(ink, 'p-ink-active');
            ink.setAttribute('data-p-ink-active', 'true');

            this.timeout = setTimeout(() => {
                if (ink) {
                    !this.isUnstyled() && removeClass(ink, 'p-ink-active');
                    ink.setAttribute('data-p-ink-active', 'false');
                }
            }, 401);
        },
        onAnimationEnd(event) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            !this.isUnstyled() && removeClass(event.currentTarget, 'p-ink-active');
            event.currentTarget.setAttribute('data-p-ink-active', 'false');
        },
        getInk(el) {
            return el && el.children ? [...el.children].find((child) => getAttribute(child, 'data-pc-name') === 'ripple') : undefined;
        }
    }
});

export default Ripple;
