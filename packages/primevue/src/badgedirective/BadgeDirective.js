import { addClass, createElement, hasClass, removeClass } from '@primeuix/utils/dom';
import { UniqueComponentId } from '@primevue/core/utils';
import BaseBadgeDirective from './BaseBadgeDirective';

const BadgeDirective = BaseBadgeDirective.extend('badge', {
    mounted(el, binding) {
        console.warn('Deprecated since v4. Use OverlayBadge component instead.');
        const id = UniqueComponentId() + '_badge';

        const badge = createElement('span', {
            id,
            class: !this.isUnstyled() && this.cx('root'),
            [this.$attrSelector]: '',
            'p-bind': this.ptm('root', {
                context: {
                    ...binding.modifiers,
                    nogutter: String(binding.value).length === 1,
                    dot: binding.value == null
                }
            })
        });

        el.$_pbadgeId = badge.getAttribute('id');

        for (let modifier in binding.modifiers) {
            !this.isUnstyled() && addClass(badge, 'p-badge-' + modifier);
        }

        if (binding.value != null) {
            if (typeof binding.value === 'object') el.$_badgeValue = binding.value.value;
            else el.$_badgeValue = binding.value;
            badge.appendChild(document.createTextNode(el.$_badgeValue));

            if (String(el.$_badgeValue).length === 1 && !this.isUnstyled()) {
                !this.isUnstyled() && addClass(badge, 'p-badge-circle');
            }
        } else {
            !this.isUnstyled() && addClass(badge, 'p-badge-dot');
        }

        el.setAttribute('data-pd-badge', true);
        !this.isUnstyled() && addClass(el, 'p-overlay-badge');
        el.setAttribute('data-p-overlay-badge', 'true');
        el.appendChild(badge);

        this.$el = badge;
    },
    updated(el, binding) {
        !this.isUnstyled() && addClass(el, 'p-overlay-badge');
        el.setAttribute('data-p-overlay-badge', 'true');

        if (binding.oldValue !== binding.value) {
            let badge = document.getElementById(el.$_pbadgeId);

            if (typeof binding.value === 'object') el.$_badgeValue = binding.value.value;
            else el.$_badgeValue = binding.value;

            if (!this.isUnstyled()) {
                if (el.$_badgeValue) {
                    if (hasClass(badge, 'p-badge-dot')) removeClass(badge, 'p-badge-dot');

                    if (el.$_badgeValue.length === 1) addClass(badge, 'p-badge-circle');
                    else removeClass(badge, 'p-badge-circle');
                } else if (!el.$_badgeValue && !hasClass(badge, 'p-badge-dot')) {
                    addClass(badge, 'p-badge-dot');
                }
            }

            badge.innerHTML = '';
            badge.appendChild(document.createTextNode(el.$_badgeValue));
        }
    }
});

export default BadgeDirective;
