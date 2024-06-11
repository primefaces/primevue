import { DomHandler } from '@primevue/core/utils';
import BaseAnimateOnScroll from './BaseAnimateOnScroll';

const AnimateOnScroll = BaseAnimateOnScroll.extend('animateonscroll', {
    created() {
        this.$value = this.$value || {};
        this.$el.style.opacity = this.$value.enterClass ? '0' : '';
    },
    mounted() {
        this.$el.setAttribute('data-pd-animateonscroll', true);

        this.bindIntersectionObserver();
    },
    unmounted() {
        this.unbindAnimationEvents();
        this.unbindIntersectionObserver();
    },
    observer: undefined,
    resetObserver: undefined,
    isObserverActive: false,
    animationState: undefined,
    animationEndListener: undefined,
    methods: {
        bindAnimationEvents() {
            if (!this.animationEndListener) {
                this.animationEndListener = () => {
                    DomHandler.removeMultipleClasses(this.$el, [this.$value.enterClass, this.$value.leaveClass]);
                    !this.$modifiers.once && this.resetObserver.observe(this.$el);
                    this.unbindAnimationEvents();
                };

                this.$el.addEventListener('animationend', this.animationEndListener);
            }
        },
        bindIntersectionObserver() {
            const { root, rootMargin, threshold = 0.5 } = this.$value;
            const options = { root, rootMargin, threshold };

            // States
            this.observer = new IntersectionObserver(([entry]) => {
                if (this.isObserverActive) {
                    if (entry.boundingClientRect.top > 0) {
                        entry.isIntersecting ? this.enter() : this.leave();
                    }
                } else if (entry.isIntersecting) {
                    this.enter();
                }

                this.isObserverActive = true;
            }, options);

            setTimeout(() => this.observer.observe(this.$el), 0);

            // Reset
            this.resetObserver = new IntersectionObserver(
                ([entry]) => {
                    if (entry.boundingClientRect.top > 0 && !entry.isIntersecting) {
                        this.$el.style.opacity = this.$value.enterClass ? '0' : '';
                        DomHandler.removeMultipleClasses(this.$el, [this.$value.enterClass, this.$value.leaveClass]);

                        this.resetObserver.unobserve(this.$el);
                    }

                    this.animationState = undefined;
                },
                { ...options, threshold: 0 }
            );
        },
        enter() {
            if (this.animationState !== 'enter' && this.$value.enterClass) {
                this.$el.style.opacity = '';
                DomHandler.removeMultipleClasses(this.$el, this.$value.leaveClass);
                DomHandler.addMultipleClasses(this.$el, this.$value.enterClass);

                this.$modifiers.once && this.unbindIntersectionObserver(this.$el);

                this.bindAnimationEvents();
                this.animationState = 'enter';
            }
        },
        leave() {
            if (this.animationState !== 'leave' && this.$value.leaveClass) {
                this.$el.style.opacity = this.$value.enterClass ? '0' : '';
                DomHandler.removeMultipleClasses(this.$el, this.$value.enterClass);
                DomHandler.addMultipleClasses(this.$el, this.$value.leaveClass);

                this.bindAnimationEvents();
                this.animationState = 'leave';
            }
        },
        unbindAnimationEvents() {
            if (this.animationEndListener) {
                this.$el.removeEventListener('animationend', this.animationEndListener);
                this.animationEndListener = undefined;
            }
        },
        unbindIntersectionObserver() {
            this.observer?.unobserve(this.$el);
            this.resetObserver?.unobserve(this.$el);
            this.isObserverActive = false;
        }
    }
});

export default AnimateOnScroll;
