import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt('tag.primary.background')};
    color: ${dt('tag.primary.color')};
    font-size: ${dt('tag.font.size')};
    font-weight: ${dt('tag.font.weight')};
    padding: ${dt('tag.padding')};
    border-radius: ${dt('tag.border.radius')};
    gap: ${dt('tag.gap')};
}

.p-tag-icon {
    font-size: ${dt('tag.icon.size')};
    width: ${dt('tag.icon.size')};
    height:${dt('tag.icon.size')};
}

.p-tag-rounded {
    border-radius: ${dt('tag.rounded.border.radius')};
}

.p-tag-success {
    background: ${dt('tag.success.background')};
    color: ${dt('tag.success.color')};
}

.p-tag-info {
    background: ${dt('tag.info.background')};
    color: ${dt('tag.info.color')};
}

.p-tag-warn {
    background: ${dt('tag.warn.background')};
    color: ${dt('tag.warn.color')};
}

.p-tag-danger {
    background: ${dt('tag.danger.background')};
    color: ${dt('tag.danger.color')};
}

.p-tag-secondary {
    background: ${dt('tag.secondary.background')};
    color: ${dt('tag.secondary.color')};
}

.p-tag-contrast {
    background: ${dt('tag.contrast.background')};
    color: ${dt('tag.contrast.color')};
}
`;

const classes = {
    root: ({ props }) => [
        'p-tag p-component',
        {
            'p-tag-info': props.severity === 'info',
            'p-tag-success': props.severity === 'success',
            'p-tag-warn': props.severity === 'warn',
            'p-tag-danger': props.severity === 'danger',
            'p-tag-secondary': props.severity === 'secondary',
            'p-tag-contrast': props.severity === 'contrast',
            'p-tag-rounded': props.rounded
        }
    ],
    icon: 'p-tag-icon',
    label: 'p-tag-label'
};

export default BaseStyle.extend({
    name: 'tag',
    theme,
    classes
});
