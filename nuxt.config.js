import { defineNuxtConfig } from 'nuxt'
const path = require('path');
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  typescript: false,
  components: true,

  css: [
    '@/assets/styles/primevue.css',
    '/node_modules/primeflex/primeflex.css',
    '/node_modules/primeicons/primeicons.css',
    '/node_modules/prismjs/themes/prism-coy.css',
    '@/assets/styles/flags.css'
  ],
  app: {
    head: {
      link: [
        {
          id: 'theme-link',
          rel: 'stylesheet',
          href: 'themes/lara-light-blue/theme.css'
        },
        {
          id: 'home-table-link',
          rel: 'stylesheet',
          href:  'styles/landing/themes/lara-light-blue/theme.css'
        }
      ]
    },
  },
  vite: {
      resolve: {
        alias: {
            'primevue/ripple': path.resolve(__dirname, '/components/ripple/Ripple.js'),
            'primevue/tooltip': path.resolve(__dirname, '/components/tooltip/Tooltip.js'),
            'primevue/useconfirm': path.resolve(__dirname, '/components/useconfirm/UseConfirm.js'),
            'primevue/usetoast': path.resolve(__dirname, '/components/usetoast/UseToast.js'),
            'primevue/usedialog': path.resolve(__dirname, '/components/usedialog/UseDialog.js'),
            'primevue/utils': path.resolve(__dirname, '/components/utils/Utils.js'),
            'primevue/api': path.resolve(__dirname, '/components/api/Api.js'),
            'primevue/portal': path.resolve(__dirname, '/components/portal/Portal.vue'),
            'primevue/button': path.resolve(__dirname, '/components/button/Button.vue'),
            'primevue/inputtext': path.resolve(__dirname, '/components/inputtext/InputText.vue'),
            'primevue/dialog': path.resolve(__dirname, '/components/dialog/Dialog.vue'),
            'primevue/menu': path.resolve(__dirname, '/components/menu/Menu.vue'),
            'primevue/tieredmenu': path.resolve(__dirname, '/components/tieredmenu/TieredMenu.vue'),
            'primevue/dropdown': path.resolve(__dirname, '/components/dropdown/Dropdown.vue'),
            'primevue/inputnumber': path.resolve(__dirname, '/components/inputnumber/InputNumber.vue'),
            'primevue/paginator': path.resolve(__dirname, '/components/paginator/Paginator.vue'),
            'primevue/progressbar': path.resolve(__dirname, '/components/progressbar/ProgressBar.vue'),
            'primevue/message': path.resolve(__dirname, '/components/message/Message.vue'),
            'primevue/tree': path.resolve(__dirname, '/components/tree/Tree.vue'),
            'primevue/confirmationeventbus': path.resolve(__dirname, '/components/confirmationeventbus/ConfirmationEventBus.js'),
            'primevue/toasteventbus': path.resolve(__dirname, '/components/toasteventbus/ToastEventBus.js'),
            'primevue/overlayeventbus': path.resolve(__dirname, '/components/overlayeventbus/OverlayEventBus.js'),
            'primevue/terminalservice': path.resolve(__dirname, '/components/terminalservice/TerminalService.js'),
            'primevue/dynamicdialogeventbus': path.resolve(__dirname, '/components/dynamicdialogeventbus/DynamicDialogEventBus.js'),
            'primevue/virtualscroller': path.resolve(__dirname, '/components/virtualscroller/VirtualScroller.vue')
        },
    },
} 
})
