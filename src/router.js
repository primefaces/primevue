import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/accordion',
        name: 'accordion',
        component: () => import('./views/accordion/AccordionDemo.vue')
    },
    {
        path: '/button',
        name: 'button',
        component: () => import('./views/button/ButtonDemo.vue')
    },
    {
        path: '/card',
        name: 'card',
        component: () => import('./views/card/CardDemo.vue')
    },
    {
        path: '/chart',
        name: 'chart',
        component: () => import('./views/chart/ChartDemo.vue')
    },
    {
        path: '/chart/pie',
        name: 'piechart',
        component: () => import('./views/chart/PieChartDemo.vue')
    },
    {
        path: '/checkbox',
        name: 'checkbox',
        component: () => import('./views/checkbox/CheckboxDemo.vue')
    },
    {
        path: '/chips',
        name: 'chips',
        component: () => import('./views/chips/ChipsDemo.vue')
    },
    {
        path: '/dropdown',
        name: 'dropdown',
        component: () => import('./views/dropdown/DropdownDemo.vue')
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import('./views/editor/EditorDemo.vue')
    },
    {
        path: '/fieldset',
        name: 'fieldset',
        component: () => import('./views/fieldset/FieldsetDemo.vue')
    },
    {
        path: '/flexgrid',
        name: 'flexgrid',
        component: () => import('./views/flexgrid/FlexGridDemo.vue')
    },
    {
        path: '/fullcalendar',
        name: 'fullcalendar',
        component: () => import('./views/fullcalendar/FullCalendarDemo.vue')
    },
    {
        path: '/inputswitch',
        name: 'inputswitch',
        component: () => import('./views/inputswitch/InputSwitchDemo.vue')
    },
    {
        path: '/inputtext',
        name: 'inputtext',
        component: () => import('./views/inputtext/InputTextDemo.vue')
    },
    {
        path: '/listbox',
        name: 'listbox',
        component: () => import('./views/listbox/ListboxDemo.vue')
    },
    {
        path: '/multiselect',
        name: 'multiselect',
        component: () => import('./views/multiselect/MultiSelectDemo.vue')
    },
    {
        path: '/panel',
        name: 'panel',
        component: () => import('./views/panel/PanelDemo.vue')
    },
    {
        path: '/password',
        name: 'password',
        component: () => import('./views/password/PasswordDemo.vue')
    },
    {
        path: '/progressbar',
        name: 'progressbar',
        component: () => import('./views/progressbar/ProgressBarDemo.vue')
    },
    {
        path: '/radiobutton',
        name: 'radiobutton',
        component: () => import('./views/radiobutton/RadioButtonDemo.vue')
    },
    {
        path: '/rating',
        name: 'rating',
        component: () => import('./views/rating/RatingDemo.vue')
    },
    {
        path: '/selectbutton',
        name: 'selectbutton',
        component: () => import('./views/selectbutton/SelectButtonDemo.vue')
    },
    {
        path: '/slider',
        name: 'slider',
        component: () => import('./views/slider/SliderDemo.vue')
    },
    {
        path: '/spinner',
        name: 'spinner',
        component: () => import('./views/spinner/SpinnerDemo.vue')
    },
    {
        path: '/textarea',
        name: 'textarea',
        component: () => import('./views/textarea/TextareaDemo.vue')
    },
    {
        path: '/tabview',
        name: 'tabview',
        component: () => import('./views/tabview/TabViewDemo.vue')
    },
    {
        path: '/togglebutton',
        name: 'togglebutton',
        component: () => import('./views/togglebutton/ToggleButtonDemo.vue')
    },
    {
        path: '/toolbar',
        name: 'toolbar',
        component: () => import('./views/toolbar/ToolbarDemo.vue')
    },
    {
        path: '/tristatecheckbox',
        name: 'tristatecheckbox',
        component: () => import('./views/tristatecheckbox/TriStateCheckboxDemo.vue')
    }
  ]
});
