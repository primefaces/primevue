import DomHandler from '../utils/DomHandler';
import UniqueComponentId from '../utils/UniqueComponentId';

const BadgeDirective = {
    inserted(el, binding) {
        const id = UniqueComponentId() + '_badge';
        el.$_pbadgeId = id;

        let badge = document.createElement('span');
        badge.id = id;
        badge.className = 'p-badge p-component';

        for (let modifier in binding.modifiers) {
            DomHandler.addClass(badge, 'p-badge-' + modifier);
        }

        if (binding.value != null) {
            badge.appendChild(document.createTextNode(binding.value));

            if (String(binding.value).length === 1) {
                DomHandler.addClass(badge, 'p-badge-no-gutter');
            }
        }
        else {
            DomHandler.addClass(badge, 'p-badge-dot');
        }

        DomHandler.addClass(el, 'p-overlay-badge');
        el.appendChild(badge);
    },
    update(el, binding) {
        DomHandler.addClass(el, 'p-overlay-badge');

        if (binding.oldValue !== binding.value) {
            let badge = document.getElementById(el.$_pbadgeId);

            if (binding.value) {
                if (DomHandler.hasClass(badge, 'p-badge-dot')) {
                    DomHandler.removeClass(badge, 'p-badge-dot');
                }

                if (String(binding.value).length === 1)
                    DomHandler.addClass(badge, 'p-badge-no-gutter');
                else
                    DomHandler.removeClass(badge, 'p-badge-no-gutter');
            }
            else if (!binding.value && !DomHandler.hasClass(badge, 'p-badge-dot')) {
                DomHandler.addClass(badge, 'p-badge-dot');
            }

            badge.innerHTML = '';
            badge.appendChild(document.createTextNode(binding.value));
        }
    }
};

export default BadgeDirective;