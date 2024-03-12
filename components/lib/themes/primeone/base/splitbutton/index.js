export default {
    css: ({ dt }) => `
.p-splitbutton {
    display: inline-flex;
    position: relative;
    border-radius: ${dt('rounded.base')};
}

.p-splitbutton-defaultbutton {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-defaultbutton:not(:disabled):hover,
.p-splitbutton-defaultbutton:not(:disabled):active {
    border-right: 0 none;
}

.p-splitbutton-menubutton {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}

.p-splitbutton .p-menu {
    min-width: 100%;
}

.p-fluid .p-splitbutton {
    display: flex;
}

.p-splitbutton.p-button-rounded .p-splitbutton-defaultbutton {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;;
}

.p-splitbutton.p-button-rounded .p-splitbutton-menubutton {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;;
}

.p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

/*
.p-splitbutton .p-splitbutton-defaultbutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-defaultbutton.p-button-outlined.p-button:hover {
    flex: 1 1 auto;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0 none;
}

.p-splitbutton-menubutton,
.p-splitbutton.p-button-rounded > .p-splitbutton-menubutton.p-button,
.p-splitbutton.p-button-outlined > .p-splitbutton-menubutton.p-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}


*/
`
};
