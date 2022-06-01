import { UniqueComponentId, DomHandler } from 'primevue/utils';

const BadgeDirective = {
    beforeMount(el, options) {
        const id = UniqueComponentId() + '_badge';
        el.$_pbadgeId = id;

        let badge = document.createElement('span');
        badge.id = id;
        badge.className = 'p-badge p-component';

        for (let modifier in options.modifiers) {
            DomHandler.addClass(badge, 'p-badge-' + modifier);
        }
        
        if (options.value != null) {
            badge.appendChild(document.createTextNode(options.value));
            
            if (String(options.value).length === 1) {
                DomHandler.addClass(badge, 'p-badge-no-gutter');
            }
        }
        else {
            DomHandler.addClass(badge, 'p-badge-dot');
        }

        DomHandler.addClass(el, 'p-overlay-badge');
        el.appendChild(badge);
    },
    updated(el, options) {
        DomHandler.addClass(el, 'p-overlay-badge');

        if (options.oldValue !== options.value) {
            let badge = document.getElementById(el.$_pbadgeId);

            if (options.value) {
                if (DomHandler.hasClass(badge, 'p-badge-dot')) {
                    DomHandler.removeClass(badge, 'p-badge-dot');
                }

                if (String(options.value).length === 1)
                    DomHandler.addClass(badge, 'p-badge-no-gutter');
                else
                    DomHandler.removeClass(badge, 'p-badge-no-gutter');
            }
            else if (!options.value && !DomHandler.hasClass(badge, 'p-badge-dot')) {
                DomHandler.addClass(badge, 'p-badge-dot');
            }

            badge.innerHTML = '';
            badge.appendChild(document.createTextNode(options.value));
        }
    }
};

export { BadgeDirective as default };
