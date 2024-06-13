import BaseStyle from '@primevue/core/base/style';

const theme = ({ dt }) => `
.p-scrolltop.p-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

.p-scrolltop-sticky.p-button {
    position: sticky;
    display: flex;
    margin-left: auto;
}

.p-scrolltop-enter-from {
    opacity: 0;
}

.p-scrolltop-enter-active {
    transition: opacity 0.15s;
}

.p-scrolltop.p-scrolltop-leave-to {
    opacity: 0;
}

.p-scrolltop-leave-active {
    transition: opacity 0.15s;
}
`;

const classes = {
    root: ({ props }) => ['p-scrolltop', { 'p-scrolltop-sticky': props.target !== 'window' }],
    icon: 'p-scrolltop-icon'
};

export default BaseStyle.extend({
    name: 'scrolltop',
    theme,
    classes
});
