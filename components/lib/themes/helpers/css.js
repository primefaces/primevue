import { dt, SharedUtils } from 'primevue/themes';

export const css = (style) => SharedUtils.object.getItemValue(style, { dt });
