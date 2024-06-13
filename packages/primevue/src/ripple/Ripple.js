import { DomHandler } from '@primevue/core/utils';
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
            const ink = DomHandler.createElement('span', {
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

            !this.isUnstyled() && DomHandler.removeClass(ink, 'p-ink-active');
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

            !this.isUnstyled() && DomHandler.addClass(ink, 'p-ink-active');
            ink.setAttribute('data-p-ink-active', 'true');

            this.timeout = setTimeout(() => {
                if (ink) {
                    !this.isUnstyled() && DomHandler.removeClass(ink, 'p-ink-active');
                    ink.setAttribute('data-p-ink-active', 'false');
                }
            }, 401);
        },
        onAnimationEnd(event) {
            if (this.timeout) {
                clearTimeout(this.timeout);
            }

            !this.isUnstyled() && DomHandler.removeClass(event.currentTarget, 'p-ink-active');
            event.currentTarget.setAttribute('data-p-ink-active', 'false');
        },
        getInk(el) {
            return el && el.children ? [...el.children].find((child) => DomHandler.getAttribute(child, 'data-pc-name') === 'ripple') : undefined;
        }
    }
});

export default Ripple;
