export default {
    variables: {
        common: {
            body: {
                paddingX: '{p.5}',
                paddingY: '{p.5}',
                gap: '{gap.5}'
            },
            caption: {
                gap: '{gap.2}'
            },
            title: {
                fontSize: '{text.2xl}',
                fontWeight: 700
            },
            subtitle: {
                fontWeight: 400
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
    display: flex;
    flex-direction: column;
    gap: var(--p-card-body-gap);
    padding: var(--p-card-body-padding-y) var(--p-card-body-padding-x);
}
.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: var(--p-card-caption-gap);
}
.p-card-title {
    font-size: var(--p-card-title-font-size);
    font-weight: var(--p-card-title-font-weight);
}
.p-card-subtitle {
    font-weight: var(--p-card-subtitle-font-weight);
    color: var(--p-card-subtitle-color);
}
    `
};
