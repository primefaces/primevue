this.primevue = this.primevue || {};
this.primevue.styleclass = (function (utils) {
    'use strict';

    function bind(el, binding) {
        el.$_pstyleclass_clicklistener = () => {
            const target = resolveTarget(el, binding);

            if (binding.value.toggleClass) {
                if (utils.DomHandler.hasClass(target, binding.value.toggleClass))
                    utils.DomHandler.removeClass(target, binding.value.toggleClass);
                else
                    utils.DomHandler.addClass(target, binding.value.toggleClass);
            }
            else {
                if (target.offsetParent === null)
                    enter(target, el, binding);
                else 
                    leave(target, binding);
            }
        };
        el.addEventListener('click', el.$_pstyleclass_clicklistener);
    }

    function unbind(el) {
        if (el.$_pstyleclass_clicklistener) {
            el.addEventListener('click', el.$_pstyleclass_clicklistener);
            el.$_pstyleclass_clicklistener = null;
        }

        unbindDocumentListener(el);
    }

    function enter(target, el, binding) {
        if (binding.value.enterActiveClass) {
            if (!target.$_pstyleclass_animating) {
                target.$_pstyleclass_animating = true;

                if (binding.value.enterActiveClass === 'slidedown') {
                    target.style.height = '0px';
                    utils.DomHandler.removeClass(target, 'hidden');
                    target.style.maxHeight = target.scrollHeight + 'px';
                    utils.DomHandler.addClass(target, 'hidden');
                    target.style.height = '';
                }

                utils.DomHandler.addClass(target, binding.value.enterActiveClass);
                if (binding.value.enterClass) {
                    utils.DomHandler.removeClass(target, binding.value.enterClass);
                }

                target.$p_styleclass_enterlistener = () => {
                    utils.DomHandler.removeClass(target, binding.value.enterActiveClass);
                    if (binding.value.enterToClass) {
                        utils.DomHandler.addClass(target, binding.value.enterToClass);
                    }
                    target.removeEventListener('animationend', target.$p_styleclass_enterlistener);
                
                    if (binding.value.enterActiveClass === 'slidedown') {
                        target.style.maxHeight = '';
                    }
            
                    target.$_pstyleclass_animating = false;
                };
                
                target.addEventListener('animationend', target.$p_styleclass_enterlistener);
            }
        }
        else {
            if (binding.value.enterClass) {
                utils.DomHandler.removeClass(target, binding.value.enterClass);
            }

            if (binding.value.enterToClass) {
                utils.DomHandler.addClass(target, binding.value.enterToClass);
            }
        }

        if (binding.value.hideOnOutsideClick) {
            bindDocumentListener(target, el, binding);
        }
    }

    function leave(target, binding) {
        if (binding.value.leaveActiveClass) {
            if (!target.$_pstyleclass_animating) {
                target.$_pstyleclass_animating = true;
                utils.DomHandler.addClass(target, binding.value.leaveActiveClass);
                if (binding.value.leaveClass) {
                    utils.DomHandler.removeClass(target, binding.value.leaveClass);
                }

                target.$p_styleclass_leavelistener = () => {
                    utils.DomHandler.removeClass(target, binding.value.leaveActiveClass);
                    if (binding.value.leaveToClass) {
                        utils.DomHandler.addClass(target, binding.value.leaveToClass);
                    }
                    target.removeEventListener('animationend', target.$p_styleclass_leavelistener);
                    target.$_pstyleclass_animating = false;
                };

                target.addEventListener('animationend', target.$p_styleclass_leavelistener);
            }
        }
        else {
            if (binding.value.leaveClass) {
                utils.DomHandler.removeClass(target, binding.value.leaveClass);
            }

            if (binding.value.leaveToClass) {
                utils.DomHandler.addClass(target, binding.value.leaveToClass);
            }
        }

        if (binding.value.hideOnOutsideClick) {
            unbindDocumentListener(target);
        }
    }

    function resolveTarget(el, binding) {
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
    }

    function bindDocumentListener(target, el, binding) {
        if (!target.$p_styleclass_documentlistener) {
            target.$p_styleclass_documentlistener = (event) => {
                if (!isVisible(target) || getComputedStyle(target).getPropertyValue('position') === 'static') {
                    unbindDocumentListener(target);
                }

                else if (isOutsideClick(event, target, el)) {
                    leave(target, binding);
                }
            };
            
            target.ownerDocument.addEventListener('click', target.$p_styleclass_documentlistener);
        }
    }

    function unbindDocumentListener(target) {
        if (target.$p_styleclass_documentlistener) {
            target.ownerDocument.removeEventListener('click', target.$p_styleclass_documentlistener);
            target.$p_styleclass_documentlistener = null;
        }
    }

    function isVisible(target) {
        return target.offsetParent !== null;
    }

    function isOutsideClick(event, target, el) {
        return !el.isSameNode(event.target) && !el.contains(event.target) && !target.contains(event.target);
    }

    const StyleClass = {
        mounted(el, binding) {
            bind(el, binding);
        },
        unmounted(el) {
            unbind(el);
        }
    };

    return StyleClass;

})(primevue.utils);
