export default {
    variables: {
        common: {
            body: {
                paddingX: '1.25rem',
                paddingY: '1.25rem'
            },
            title: {
                fontSize: '1.5rem',
                fontWeight: 700
            },
            subtitle: {
                fontWeight: 400
            },
            content: {
                paddingX: '0',
                paddingY: '1.25rem'
            },
            footer: {
                // 1.25rem 0 0 0
                paddingX: '',
                paddingY: ''
            }
        },
        light: {
            root: {
                background: '{shade.0}',
                color: '{shade.700}',
                boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)'
            },
            subtitle: {
                color: '{shade.600}'
            }
        },
        dark: {
            root: {
                background: '{shade.0}',
                color: '{shade.700}',
                boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)'
            },
            subtitle: {
                color: '{shade.600}'
            }
        }
    },
    css: `
.p-card {
    background: var(--p-card-background);
    color: var(--p-card-color);
    box-shadow: var(--p-card-box-shadow);
    border-radius: var(--p-border-radius);
}
.p-card-body {
    padding: var(--p-card-body-padding-y) var(--p-card-body-padding-x);
}
.p-card-title {
    font-size: var(--p-card-title-font-size);
    font-weight: var(--p-card-title-font-weight);
    margin-bottom: var(--p-gap);
}
.p-card-subtitle {
    font-weight: var(--p-card-subtitle-font-weight);
    margin-bottom: var(--p-gap);
    color: var(--p-card-subtitle-color);
}
.p-card-content {
    padding: var(--p-card-content-padding-y) var(--p-card-content-padding-x);
}
.p-card-footer {
    padding: var(--p-card-footer-padding-y) var(--p-card-footer-padding-x);
}
    `
};
