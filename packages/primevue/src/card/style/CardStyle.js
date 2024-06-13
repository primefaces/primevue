import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-card {
    background: ${dt('card.background')};
    color: ${dt('card.color')};
    box-shadow: ${dt('card.shadow')};
    border-radius: ${dt('card.border.radius')};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${dt('card.caption.gap')};
}

.p-card-body {
    padding: ${dt('card.body.padding')};
    display: flex;
    flex-direction: column;
    gap: ${dt('card.body.gap')};
}

.p-card-title {
    font-size: ${dt('card.title.font.size')};
    font-weight: ${dt('card.title.font.weight')};
}

.p-card-subtitle {
    color: ${dt('card.subtitle.color')};
}
`;

const classes = {
    root: 'p-card p-component',
    header: 'p-card-header',
    body: 'p-card-body',
    caption: 'p-card-caption',
    title: 'p-card-title',
    subtitle: 'p-card-subtitle',
    content: 'p-card-content',
    footer: 'p-card-footer'
};

export default BaseStyle.extend({
    name: 'card',
    theme,
    classes
});
