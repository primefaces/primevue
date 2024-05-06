import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${dt('chip.background')};
    color: ${dt('chip.color')};
    border-radius: 16px;
    padding: 0.5rem 0.75rem;
}

.p-chip-icon {
    margin-right: 0.5rem;
}

.p-chip-image {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-left: -0.5rem;
    margin-right: 0.5rem;
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: 0.5rem;
}

.p-chip-remove-icon {
    cursor: pointer;
    margin-left: 0.375rem;
    border-radius: 6px;
    transition: outline-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    outline: ${dt('focus.ring.width')} ${dt('focus.ring.style')} ${dt('focus.ring.color')};
    outline-offset: ${dt('focus.ring.offset')};
}
`;

const classes = {
    root: 'p-chip p-component',
    image: 'p-chip-image',
    icon: 'p-chip-icon',
    label: 'p-chip-label',
    removeIcon: 'p-chip-remove-icon'
};

export default BaseStyle.extend({
    name: 'chip',
    theme,
    classes
});
