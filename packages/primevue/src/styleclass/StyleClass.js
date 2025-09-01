import { addClass, getTargetElement, hasClass, isElement, removeClass } from '@primeuix/utils/dom';
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
            const target = getTargetElement(binding.value.selector, el);

            this.$el = target;

            el.$_pstyleclass_clicklistener = () => {
                if (binding.value.toggleClass) {
                    if (hasClass(target, binding.value.toggleClass)) removeClass(target, binding.value.toggleClass);
                    else addClass(target, binding.value.toggleClass);
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

            this.unbindResizeListener(el);
            this.unbindDocumentListener(el);
        },
        enter(target, el, binding) {
            if (binding.value.enterActiveClass) {
                if (!target.$_pstyleclass_animating) {
                    target.$_pstyleclass_animating = true;

                    if (binding.value.enterActiveClass.includes('slidedown')) {
                        target.style.height = '0px';
                        removeClass(target, binding.value.hiddenClass || binding.value.enterFromClass);
                        target.style.maxHeight = target.scrollHeight + 'px';
                        addClass(target, binding.value.hiddenClass || binding.value.enterActiveClass);
                        target.style.height = '';
                    }

                    addClass(target, binding.value.enterActiveClass);

                    if (binding.value.enterFromClass) {
                        removeClass(target, binding.value.enterFromClass);
                    }

                    target.$p_styleclass_enterlistener = () => {
                        removeClass(target, binding.value.enterActiveClass);

                        if (binding.value.enterToClass) {
                            addClass(target, binding.value.enterToClass);
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
                    removeClass(target, binding.value.enterFromClass);
                }

                if (binding.value.enterToClass) {
                    addClass(target, binding.value.enterToClass);
                }
            }

            if (binding.value.hideOnOutsideClick) {
                this.bindDocumentListener(target, el, binding);
            }

            if (binding.value.hideOnResize) {
                this.bindResizeListener(target, el, binding);
            }
        },
        leave(target, binding) {
            if (binding.value.leaveActiveClass) {
                if (!target.$_pstyleclass_animating) {
                    target.$_pstyleclass_animating = true;
                    addClass(target, binding.value.leaveActiveClass);

                    if (binding.value.leaveFromClass) {
                        removeClass(target, binding.value.leaveFromClass);
                    }

                    target.$p_styleclass_leavelistener = () => {
                        removeClass(target, binding.value.leaveActiveClass);

                        if (binding.value.leaveToClass) {
                            addClass(target, binding.value.leaveToClass);
                        }

                        target.removeEventListener('animationend', target.$p_styleclass_leavelistener);
                        target.$_pstyleclass_animating = false;
                    };

                    target.addEventListener('animationend', target.$p_styleclass_leavelistener);
                }
            } else {
                if (binding.value.leaveFromClass) {
                    removeClass(target, binding.value.leaveFromClass);
                }

                if (binding.value.leaveToClass) {
                    addClass(target, binding.value.leaveToClass);
                }
            }

            if (binding.value.hideOnOutsideClick) {
                this.unbindDocumentListener(target);
            }

            if (binding.value.hideOnResize) {
                this.unbindResizeListener(target);
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
        bindResizeListener(target, el, binding) {
            target.$p_styleclass_resizeselector = getTargetElement(binding.value.resizeSelector ?? 'window');

            if (isElement(target.$p_styleclass_resizeselector)) {
                this.bindElementResizeListener(target, binding);
            } else {
                this.bindWindowResizeListener(target, binding);
            }
        },
        unbindResizeListener(target) {
            this.unbindWindowResizeListener(target);
            this.unbindElementResizeListener(target);
        },
        bindWindowResizeListener(target, binding) {
            if (!target.$p_styleclass_windowresizelistener) {
                target.$p_styleclass_windowresizelistener = () => {
                    if (!this.isVisible(target)) {
                        this.unbindWindowResizeListener(target);
                    } else {
                        this.leave(target, binding);
                    }
                };

                target.ownerDocument.defaultView.addEventListener('resize', target.$p_styleclass_windowresizelistener);
            }
        },
        unbindWindowResizeListener(target) {
            if (target.$p_styleclass_windowresizelistener) {
                target.ownerDocument.defaultView.removeEventListener('resize', target.$p_styleclass_windowresizelistener);
                target.$p_styleclass_windowresizelistener = null;
            }
        },
        bindElementResizeListener(target, binding) {
            if (!target.$p_styleclass_resizeobserver && target.$p_styleclass_resizeselector) {
                let isFirstResize = true;

                target.$p_styleclass_resizeobserver = new ResizeObserver(() => {
                    if (isFirstResize) {
                        isFirstResize = false;

                        return;
                    }

                    if (this.isVisible(target)) {
                        this.leave(target, binding);
                    }
                });
                target.$p_styleclass_resizeobserver.observe(target.$p_styleclass_resizeselector);
            }
        },
        unbindElementResizeListener(target) {
            if (target.$p_styleclass_resizeobserver) {
                target.$p_styleclass_resizeobserver.disconnect();
                target.$p_styleclass_resizeobserver = null;
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
