import { DomHandler, ObjectUtils } from 'primevue/utils';

export const BaseDirective = {
    directiveElement: null,
    extend: (directiveName, hooks) => {
        return {
            created: (el, binding, vnode, prevVnode) => {
                hooks['created'] && hooks['created'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'created', el, binding, vnode, prevVnode);
            },
            beforeMount: (el, binding, vnode, prevVnode) => {
                hooks['beforeMount'] && hooks['beforeMount'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'beforeMount', el, binding, vnode, prevVnode);
            },
            mounted: (el, binding, vnode, prevVnode) => {
                hooks['mounted'] && hooks['mounted'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'mounted', el, binding, vnode, prevVnode);
            },
            beforeUpdate: (el, binding, vnode, prevVnode) => {
                hooks['beforeUpdate'] && hooks['beforeUpdate'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'beforeUpdate', el, binding, vnode, prevVnode);
            },
            updated: (el, binding, vnode, prevVnode) => {
                hooks['updated'] && hooks['updated'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'updated', el, binding, vnode, prevVnode);
            },
            beforeUnmount: (el, binding, vnode, prevVnode) => {
                hooks['beforeUnmount'] && hooks['beforeUnmount'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'beforeUnmount', el, binding, vnode, prevVnode);
            },
            unmounted: (el, binding, vnode, prevVnode) => {
                hooks['unmounted'] && hooks['unmounted'](el, binding, vnode, prevVnode);
                BaseDirective.handleHook(directiveName, 'unmounted', el, binding, vnode, prevVnode);
            }
        };
    },
    handleHook: (directiveName, hookName, el, binding, vnode, prevVnode) => {
        let _config = binding.instance.$primevue && binding.instance.$primevue.config;
        let _directive = _config && _config.pt && _config.pt.directives && _config.pt.directives[directiveName];

        // global pt hook
        _directive && _directive.hooks && _directive.hooks[hookName] && _directive.hooks[hookName](BaseDirective.directiveElement, el, binding, vnode, prevVnode);
        // options pt hook
        binding.value && typeof binding.value === 'object' && binding.value.pt && binding.value.pt.hooks && binding.value.pt.hooks[hookName] && binding.value.pt.hooks[hookName](BaseDirective.directiveElement, el, binding, vnode, prevVnode);
    },
    handleCSS: (directiveName, el, binding) => {
        let _config = binding.instance.$primevue && binding.instance.$primevue.config;
        let _directive = _config && _config.pt && _config.pt.directives && _config.pt.directives[directiveName];
        let ptCSSOptions = [];

        // global pt css
        _directive && _directive.css && ptCSSOptions.push(_directive.css);
        // options pt css
        binding.value && binding.value.pt && binding.value.pt.css && ptCSSOptions.push(binding.value.pt.css);

        for (let option of ptCSSOptions) {
            Object.entries(option).forEach(([key, value]) => {
                let styledElement;

                if (key === 'root' && directiveName !== 'badge') styledElement = el;
                else {
                    styledElement = DomHandler.findSingle(el, `[data-pc-section="${ObjectUtils.convertToFlatCase(key)}"]`);
                }

                value.class && DomHandler.addMultipleClasses(styledElement, value.class);
                value.style && DomHandler.addStyles(styledElement, value.style);
            });
        }
    }
};
