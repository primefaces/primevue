import { DomHandler } from '@primevue/core/utils';
import BaseStyleClass from './BaseStyleClass';

const StyleClass = BaseStyleClass.extend('styleclass', {
    mounted(el, binding) {
        el.setAttribute('data-pd-styleclass', true);

        this.bind(el, binding);
    },
    unmounted(el) {
        this.unbind(el);
    },
    methods: {
        bind(el, binding) {
            const target = this.resolveTarget(el, binding);

            this.$el = target;

            el.$_pstyleclass_clicklistener = () => {
                if (binding.value.toggleClass) {
                    if (DomHandler.hasClass(target, binding.value.toggleClass)) DomHandler.removeClass(target, binding.value.toggleClass);
                    else DomHandler.addClass(target, binding.value.toggleClass);
                } else {
                    if (target.offsetParent === null) this.enter(target, el, binding);
                    else this.leave(target, binding);
                }
            };

            el.addEventListener('click', el.$_pstyleclass_clicklistener);
        },
        unbind(el) {
            if (el.$_pstyleclass_clicklistener) {
                el.removeEventListener('click', el.$_pstyleclass_clicklistener);
                el.$_pstyleclass_clicklistener = null;
            }

            this.unbindDocumentListener(el);
        },
        enter(target, el, binding) {
            if (binding.value.enterActiveClass) {
                if (!target.$_pstyleclass_animating) {
                    target.$_pstyleclass_animating = true;

                    if (binding.value.enterActiveClass.includes('slidedown')) {
                        target.style.height = '0px';
                        DomHandler.removeClass(target, 'hidden');
                        target.style.maxHeight = target.scrollHeight + 'px';
                        DomHandler.addClass(target, 'hidden');
                        target.style.height = '';
                    }

                    DomHandler.addClass(target, binding.value.enterActiveClass);

                    if (binding.value.enterFromClass) {
                        DomHandler.removeClass(target, binding.value.enterFromClass);
                    }

                    target.$p_styleclass_enterlistener = () => {
                        DomHandler.removeClass(target, binding.value.enterActiveClass);

                        if (binding.value.enterToClass) {
                            DomHandler.addClass(target, binding.value.enterToClass);
                        }

                        target.removeEventListener('animationend', target.$p_styleclass_enterlistener);

                        if (binding.value.enterActiveClass.includes('slidedown')) {
                            target.style.maxHeight = '';
                        }

                        target.$_pstyleclass_animating = false;
                    };

                    target.addEventListener('animationend', target.$p_styleclass_enterlistener);
                }
            } else {
                if (binding.value.enterFromClass) {
                    DomHandler.removeClass(target, binding.value.enterFromClass);
                }

                if (binding.value.enterToClass) {
                    DomHandler.addClass(target, binding.value.enterToClass);
                }
            }

            if (binding.value.hideOnOutsideClick) {
                this.bindDocumentListener(target, el, binding);
            }
        },
        leave(target, binding) {
            if (binding.value.leaveActiveClass) {
                if (!target.$_pstyleclass_animating) {
                    target.$_pstyleclass_animating = true;
                    DomHandler.addClass(target, binding.value.leaveActiveClass);

                    if (binding.value.leaveFromClass) {
                        DomHandler.removeClass(target, binding.value.leaveFromClass);
                    }

                    target.$p_styleclass_leavelistener = () => {
                        DomHandler.removeClass(target, binding.value.leaveActiveClass);

                        if (binding.value.leaveToClass) {
                            DomHandler.addClass(target, binding.value.leaveToClass);
                        }

                        target.removeEventListener('animationend', target.$p_styleclass_leavelistener);
                        target.$_pstyleclass_animating = false;
                    };

                    target.addEventListener('animationend', target.$p_styleclass_leavelistener);
                }
            } else {
                if (binding.value.leaveFromClass) {
                    DomHandler.removeClass(target, binding.value.leaveFromClass);
                }

                if (binding.value.leaveToClass) {
                    DomHandler.addClass(target, binding.value.leaveToClass);
                }
            }

            if (binding.value.hideOnOutsideClick) {
                this.unbindDocumentListener(target);
            }
        },
        resolveTarget(el, binding) {
            switch (binding.value.selector) {
                case '@next':
                    return el.nextElementSibling;

                case '@prev':
                    return el.previousElementSibling;

                case '@parent':
                    return el.parentElement;

                case '@grandparent':
                    return el.parentElement.parentElement;

                default:
                    return document.querySelector(binding.value.selector);
            }
        },
        bindDocumentListener(target, el, binding) {
            if (!target.$p_styleclass_documentlistener) {
                target.$p_styleclass_documentlistener = (event) => {
                    if (!this.isVisible(target) || getComputedStyle(target).getPropertyValue('position') === 'static') {
                        this.unbindDocumentListener(target);
                    } else if (this.isOutsideClick(event, target, el)) {
                        this.leave(target, binding);
                    }
                };

                target.ownerDocument.addEventListener('click', target.$p_styleclass_documentlistener);
            }
        },
        unbindDocumentListener(target) {
            if (target.$p_styleclass_documentlistener) {
                target.ownerDocument.removeEventListener('click', target.$p_styleclass_documentlistener);
                target.$p_styleclass_documentlistener = null;
            }
        },
        isVisible(target) {
            return target.offsetParent !== null;
        },
        isOutsideClick(event, target, el) {
            return !el.isSameNode(event.target) && !el.contains(event.target) && !target.contains(event.target);
        }
    }
});

export default StyleClass;
