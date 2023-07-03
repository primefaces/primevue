import BaseDirective from 'primevue/basedirective';
import { useStyle } from 'primevue/usestyle';

const styles = `
.p-tooltip {
    position:absolute;
    display:none;
    padding: .25em .5rem;
    max-width: 12.5rem;
}

.p-tooltip.p-tooltip-right,
.p-tooltip.p-tooltip-left {
    padding: 0 .25rem;
}

.p-tooltip.p-tooltip-top,
.p-tooltip.p-tooltip-bottom {
    padding:.25em 0;
}

.p-tooltip .p-tooltip-text {
   white-space: pre-line;
   word-break: break-word;
}

.p-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
}

.p-tooltip-right .p-tooltip-arrow {
    top: 50%;
    left: 0;
    margin-top: -.25rem;
    border-width: .25em .25em .25em 0;
}

.p-tooltip-left .p-tooltip-arrow {
    top: 50%;
    right: 0;
    margin-top: -.25rem;
    border-width: .25em 0 .25em .25rem;
}

.p-tooltip.p-tooltip-top {
    padding: .25em 0;
}

.p-tooltip-top .p-tooltip-arrow {
    bottom: 0;
    left: 50%;
    margin-left: -.25rem;
    border-width: .25em .25em 0;
}

.p-tooltip-bottom .p-tooltip-arrow {
    top: 0;
    left: 50%;
    margin-left: -.25rem;
    border-width: 0 .25em .25rem;
}
`;

const classes = {
    root: 'p-tooltip p-component',
    arrow: 'p-tooltip-arrow',
    text: 'p-tooltip-text'
};

const { load: loadStyle } = useStyle(styles, { name: 'tooltip', manual: true });

const BaseTooltip = BaseDirective.extend({
    css: {
        classes,
        loadStyle
    }
});

export default BaseTooltip;
