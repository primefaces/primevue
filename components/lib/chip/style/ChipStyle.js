import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-chip {
    display: inline-flex;
    align-items: center;
    background: ${dt('chip.background')};
    color: ${dt('chip.color')};
    border-radius: ${dt('chip.border.radius')};
    padding: ${dt('chip.padding.y')} ${dt('chip.padding.x')};
    gap: ${dt('chip.gap')};
}

.p-chip-image {
    border-radius: 50%;
    width: ${dt('chip.image.width')};
    height: ${dt('chip.image.height')};
    margin-left: calc(-1 * ${dt('chip.padding.y')});
}

.p-chip:has(.p-chip-remove-icon) {
    padding-right: ${dt('chip.padding.y')};
}

.p-chip:has(.p-chip-image) {
    padding-top: calc(${dt('chip.padding.y')} / 2);
    padding-bottom: calc(${dt('chip.padding.y')} / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    border-radius: ${dt('chip.remove.icon.border.radius')};
    transition: outline-color ${dt('transition.duration')}, box-shadow-color ${dt('transition.duration')};
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: ${dt('chip.remove.icon.focus.ring.shadow')};
    outline: ${dt('chip.remove.icon.focus.ring.width')} ${dt('chip.remove.icon.focus.ring.style')} ${dt('chip.remove.icon.focus.ring.color')};
    outline-offset: ${dt('chip.remove.icon.focus.ring.offset')};
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
