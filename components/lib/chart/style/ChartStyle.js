import BaseStyle from 'primevue/base/style';

const css = `
@layer primevue {
    .p-chart {
        position: relative;
    }
}
`;

const classes = {
    root: 'p-chart'
};

export default BaseStyle.extend({
    name: 'chart',
    css,
    classes
});
