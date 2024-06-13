import BaseStyle from '@primevue/core/base/style';

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

.p-chip-icon {
    color: ${dt('chip.icon.color')};
    font-size: ${dt('chip.icon.font.size')};
    width: ${dt('chip.icon.size')};
    height: ${dt('chip.icon.size')};
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
    font-size: ${dt('chip.remove.icon.font.size')};
    width: ${dt('chip.remove.icon.size')};
    height: ${dt('chip.remove.icon.size')};
    color: ${dt('chip.remove.icon.color')};
    border-radius: 50%;
    transition: outline-color ${dt('chip.transition.duration')}, box-shadow ${dt('chip.transition.duration')};
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
