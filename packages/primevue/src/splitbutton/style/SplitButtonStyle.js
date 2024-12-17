import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${dt('splitbutton.border.radius')};
}

.p-splitbutton-button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-inline-end: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-inline-end: 0 none;
}

.p-splitbutton-dropdown {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-splitbutton-fluid {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-start-end-radius: ${dt('splitbutton.rounded.border.radius')};
    border-end-end-radius: ${dt('splitbutton.rounded.border.radius')};
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-start-start-radius: ${dt('splitbutton.rounded.border.radius')};
    border-end-start-radius: ${dt('splitbutton.rounded.border.radius')};
}

.p-splitbutton-raised {
    box-shadow: ${dt('splitbutton.raised.shadow')};
}
`;

const classes = {
    root: ({ instance, props }) => [
        'p-splitbutton p-component',
        {
            'p-splitbutton-raised': props.raised,
            'p-splitbutton-rounded': props.rounded,
            'p-splitbutton-fluid': instance.hasFluid
        }
    ],
    pcButton: 'p-splitbutton-button',
    pcDropdown: 'p-splitbutton-dropdown'
};

export default BaseStyle.extend({
    name: 'splitbutton',
    theme,
    classes
});
