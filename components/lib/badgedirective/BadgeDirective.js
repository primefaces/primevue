import { BaseDirective } from 'primevue/basedirective';
import { DomHandler, UniqueComponentId } from 'primevue/utils';

const BadgeDirective = BaseDirective.extend('badge', {
    mounted(el, binding) {
        const id = UniqueComponentId() + '_badge';

        el.$_pbadgeId = id;
        el.$_pbadgeUnstyled = binding.instance.$primevue.config.unstyled || false;

        let badge = document.createElement('span');

        badge.id = id;
        !el.$_pbadgeUnstyled && (badge.className = 'p-badge p-component');
        badge.setAttribute('data-pc-name', 'badge');
        badge.setAttribute('data-pc-section', 'root');

        for (let modifier in binding.modifiers) {
            !el.$_pbadgeUnstyled && DomHandler.addClass(badge, 'p-badge-' + modifier);
        }

        if (binding.value != null) {
            if (typeof binding.value === 'object') el.$_badgeValue = binding.value.value;
            else el.$_badgeValue = binding.value;
            badge.appendChild(document.createTextNode(el.$_badgeValue));

            if (String(el.$_badgeValue).length === 1 && !el.$_pbadgeUnstyled) {
                !el.$_pbadgeUnstyled && DomHandler.addClass(badge, 'p-badge-no-gutter');
            }
        } else {
            !el.$_pbadgeUnstyled && DomHandler.addClass(badge, 'p-badge-dot');
        }

        !el.$_pbadgeUnstyled && DomHandler.addClass(el, 'p-overlay-badge');
        el.setAttribute('data-p-overlay-badge', 'true');
        el.appendChild(badge);
        el.$pEl = badge;

        BaseDirective.handleCSS('badge', el, binding);
    },
    updated(el, binding) {
        !el.$_pbadgeUnstyled && DomHandler.addClass(el, 'p-overlay-badge');
        el.setAttribute('data-p-overlay-badge', 'true');

        if (binding.oldValue !== binding.value) {
            let badge = document.getElementById(el.$_pbadgeId);

            if (typeof binding.value === 'object') el.$_badgeValue = binding.value.value;
            else el.$_badgeValue = binding.value;

            if (!el.$_pbadgeUnstyled) {
                if (el.$_badgeValue) {
                    if (DomHandler.hasClass(badge, 'p-badge-dot')) DomHandler.removeClass(badge, 'p-badge-dot');

                    if (el.$_badgeValue.length === 1) DomHandler.addClass(badge, 'p-badge-no-gutter');
                    else DomHandler.removeClass(badge, 'p-badge-no-gutter');
                } else if (!el.$_badgeValue && !DomHandler.hasClass(badge, 'p-badge-dot')) {
                    DomHandler.addClass(badge, 'p-badge-dot');
                }
            }

            badge.innerHTML = '';
            badge.appendChild(document.createTextNode(el.$_badgeValue));
        }
    }
});

export default BadgeDirective;
