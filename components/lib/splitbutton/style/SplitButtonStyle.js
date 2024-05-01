import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${dt('rounded.base')};
}

.p-splitbutton-button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
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

.p-splitbutton.p-button-rounded .p-splitbutton-button {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;;
}

.p-splitbutton.p-button-rounded .p-splitbutton-dropdown {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;;
}

.p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

/*
.p-splitbutton .p-splitbutton-button,
.p-splitbutton.p-button-rounded > .p-splitbutton-button.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-button.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-button.p-button-outlined.p-button:hover {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-dropdown,
.p-splitbutton.p-button-rounded > .p-splitbutton-dropdown.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-dropdown.p-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}


*/
`;

const classes = {
    root: 'p-splitbutton p-component',
    button: 'p-splitbutton-button',
    dropdown: 'p-splitbutton-dropdown'
};

export default BaseStyle.extend({
    name: 'splitbutton',
    theme,
    classes
});
