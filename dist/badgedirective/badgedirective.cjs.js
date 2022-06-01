'use strict';

var utils = require('primevue/utils');

const BadgeDirective = {
    beforeMount(el, options) {
        const id = utils.UniqueComponentId() + '_badge';
        el.$_pbadgeId = id;

        let badge = document.createElement('span');
        badge.id = id;
        badge.className = 'p-badge p-component';

        for (let modifier in options.modifiers) {
            utils.DomHandler.addClass(badge, 'p-badge-' + modifier);
        }
        
        if (options.value != null) {
            badge.appendChild(document.createTextNode(options.value));
            
            if (String(options.value).length === 1) {
                utils.DomHandler.addClass(badge, 'p-badge-no-gutter');
            }
        }
        else {
            utils.DomHandler.addClass(badge, 'p-badge-dot');
        }

        utils.DomHandler.addClass(el, 'p-overlay-badge');
        el.appendChild(badge);
    },
    updated(el, options) {
        utils.DomHandler.addClass(el, 'p-overlay-badge');

        if (options.oldValue !== options.value) {
            let badge = document.getElementById(el.$_pbadgeId);

            if (options.value) {
                if (utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
                    utils.DomHandler.removeClass(badge, 'p-badge-dot');
                }

                if (String(options.value).length === 1)
                    utils.DomHandler.addClass(badge, 'p-badge-no-gutter');
                else
                    utils.DomHandler.removeClass(badge, 'p-badge-no-gutter');
            }
            else if (!options.value && !utils.DomHandler.hasClass(badge, 'p-badge-dot')) {
                utils.DomHandler.addClass(badge, 'p-badge-dot');
            }

            badge.innerHTML = '';
            badge.appendChild(document.createTextNode(options.value));
        }
    }
};

module.exports = BadgeDirective;
