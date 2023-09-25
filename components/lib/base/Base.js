import { useStyle } from 'primevue/usestyle';

const styles = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`;

export const { load: loadBaseStyle } = useStyle(styles, { name: 'base', manual: true });

const Base = {
    styles
};

export default Base;
