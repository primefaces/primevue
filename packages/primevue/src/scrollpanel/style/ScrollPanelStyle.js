import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-scrollpanel-content-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    float: left;
}

.p-scrollpanel-content {
    height: calc(100% + calc(2 * ${dt('scrollpanel.bar.size')}));
    width: calc(100% + calc(2 * ${dt('scrollpanel.bar.size')}));
    padding: 0 calc(2 * ${dt('scrollpanel.bar.size')}) calc(2 * ${dt('scrollpanel.bar.size')}) 0;
    position: relative;
    overflow: auto;
    box-sizing: border-box;
    scrollbar-width: none;
}

.p-scrollpanel-content::-webkit-scrollbar {
    display: none;
}

.p-scrollpanel-bar {
    position: relative;
    border-radius: ${dt('scrollpanel.bar.border.radius')};
    z-index: 2;
    cursor: pointer;
    opacity: 0;
    outline-color: transparent;
    transition: outline-color ${dt('scrollpanel.transition.duration')};
    background: ${dt('scrollpanel.bar.background')};
    border: 0 none;
    transition: outline-color ${dt('scrollpanel.transition.duration')}, opacity ${dt('scrollpanel.transition.duration')};
}

.p-scrollpanel-bar:focus-visible {
    box-shadow: ${dt('scrollpanel.bar.focus.ring.shadow')};
    outline: ${dt('scrollpanel.barfocus.ring.width')} ${dt('scrollpanel.bar.focus.ring.style')} ${dt('scrollpanel.bar.focus.ring.color')};
    outline-offset: ${dt('scrollpanel.barfocus.ring.offset')};
}

.p-scrollpanel-bar-y {
    width: ${dt('scrollpanel.bar.size')};
    top: 0;
}

.p-scrollpanel-bar-x {
    height: ${dt('scrollpanel.bar.size')};
    bottom: 0;
}

.p-scrollpanel-hidden {
    visibility: hidden;
}

.p-scrollpanel:hover .p-scrollpanel-bar,
.p-scrollpanel:active .p-scrollpanel-bar {
    opacity: 1;
}

.p-scrollpanel-grabbed {
    user-select: none;
}
`;

const classes = {
    root: 'p-scrollpanel p-component',
    contentContainer: 'p-scrollpanel-content-container',
    content: 'p-scrollpanel-content',
    barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
    barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};

export default BaseStyle.extend({
    name: 'scrollpanel',
    theme,
    classes
});
