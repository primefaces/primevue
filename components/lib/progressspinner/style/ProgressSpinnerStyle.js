import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-progress-spinner {
        position: relative;
        margin: 0 auto;
        width: 100px;
        height: 100px;
        display: inline-block;
    }

    .p-progress-spinner::before {
        content: '';
        display: block;
        padding-top: 100%;
    }

    .p-progress-spinner-svg {
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
}
`;

const classes = {
    root: 'p-progress-spinner',
    spinner: 'p-progress-spinner-svg',
    circle: 'p-progress-spinner-circle'
};

export default BaseStyle.extend({
    name: 'progressspinner',
    css,
    classes
});
