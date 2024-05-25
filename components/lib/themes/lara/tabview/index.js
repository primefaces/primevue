export default {
    root: {
        transitionDuration: '{transition.duration}'
    },
    tabList: {
        background: '{content.background}',
        borderColor: '{content.border.color}'
    },
    tab: {
        borderColor: '{content.border.color}',
        activeBorderColor: '{primary.color}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}',
        activeColor: '{primary.color}'
    },
    tabPanel: {
        background: '{content.background}',
        color: '{content.color}'
    },
    navButton: {
        background: '{content.background}',
        color: '{text.muted.color}',
        hoverColor: '{text.color}'
    },
    colorScheme: {
        light: {
            navButton: {
                boxShadow: '0px 0px 10px 50px rgba(255, 255, 255, 0.6)'
            }
        },
        dark: {
            navButton: {
                boxShadow: '0px 0px 10px 50px color-mix(in srgb, {content.background}, transparent 50%)'
            }
        }
    }
};
