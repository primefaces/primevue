import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${dt('splitbutton.border.radius')};
}

.p-splitbutton-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-button:focus-visible,
.p-splitbutton-dropdown:focus-visible {
    z-index: 1;
}

.p-splitbutton-button:not(:disabled):hover,
.p-splitbutton-button:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-dropdown {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton {
    display: flex;
}

.p-splitbutton-rounded .p-splitbutton-dropdown {
    border-top-right-radius: ${dt('splitbutton.rounded.border.radius')};
    border-bottom-right-radius: ${dt('splitbutton.rounded.border.radius')};
}

.p-splitbutton-rounded .p-splitbutton-button {
    border-top-left-radius: ${dt('splitbutton.rounded.border.radius')};
    border-bottom-left-radius: ${dt('splitbutton.rounded.border.radius')};
}

.p-splitbutton-raised {
    box-shadow: ${dt('splitbutton.raised.shadow')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-splitbutton p-component',
        {
            'p-splitbutton-raised': props.raised,
            'p-splitbutton-rounded': props.rounded
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
