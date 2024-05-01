import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${dt('tag.primary.background')};
    color: ${dt('tag.primary.color')};
    font-size: 0.875rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: ${dt('rounded.base')};
    gap: 0.25rem;
}

.p-tag-icon {
    font-size: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
}

.p-tag-rounded {
    border-radius: 10rem;
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
