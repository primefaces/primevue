import BaseStyle from 'primevue/base/style';
import { useStyle } from 'primevue/usestyle';

export default BaseStyle.extend({
    name: 'common',
    loadGlobalStyle: (globalCSS, options = {}) => useStyle(globalCSS, { name: 'global', ...options })
});
