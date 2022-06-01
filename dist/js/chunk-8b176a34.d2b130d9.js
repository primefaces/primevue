(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b176a34"],{"01a3":function(e,t,n){var o=n("24fb");t=o(!1),t.push([e.i,"button[data-v-57a2ce90]{margin-right:.5rem}[data-v-57a2ce90] .p-tree a{color:#2196f3}",""]),e.exports=t},"1aa5":function(e,t,n){var o=n("01a3");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var a=n("499e").default;a("a2af1930",o,!0,{sourceMap:!1,shadowMode:!1})},bdac:function(e,t,n){"use strict";n("1aa5")},e6cf6:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=function(e){return Object(o["J"])("data-v-57a2ce90"),e=e(),Object(o["H"])(),e},s={class:"content-section introduction"},l=a((function(){return Object(o["k"])("div",{class:"feature-intro"},[Object(o["k"])("h1",null,[Object(o["n"])("Tree "),Object(o["k"])("span",null,"Templating")]),Object(o["k"])("p",null,"Tree is used to display hierarchical data.")],-1)})),r={class:"content-section implementation"},p={class:"card"},i=["href"];function u(e,t,n,a,u,c){var d=Object(o["O"])("AppDemoActions"),m=Object(o["O"])("Tree"),g=Object(o["O"])("AppDoc");return Object(o["G"])(),Object(o["j"])("div",null,[Object(o["k"])("div",s,[l,Object(o["o"])(d)]),Object(o["k"])("div",r,[Object(o["k"])("div",p,[Object(o["o"])(m,{value:u.nodes},{default:Object(o["Y"])((function(e){return[Object(o["k"])("b",null,Object(o["S"])(e.node.label),1)]})),url:Object(o["Y"])((function(e){return[Object(o["k"])("a",{href:e.node.data},Object(o["S"])(e.node.label),9,i)]})),_:1},8,["value"])])]),Object(o["o"])(g,{name:"TreeTemplatingDemo",sources:u.sources,service:["NodeService"],data:["treenodes"],github:"tree/TreeTemplatingDemo.vue"},null,8,["sources"])])}var c={data:function(){return{nodes:[{key:"0",label:"Introduction",children:[{key:"0-0",label:"What is Vue.js?",data:"https://vuejs.org/guide/introduction.html#what-is-vue",type:"url"},{key:"0-1",label:"Quick Start",data:"https://vuejs.org/guide/quick-start.html#quick-start",type:"url"},{key:"0-2",label:"Creating a Vue Application",data:"https://vuejs.org/guide/essentials/application.html#creating-a-vue-application",type:"url"},{key:"0-3",label:"Conditionals Rendering",data:"https://vuejs.org/guide/essentials/conditional.html#conditional-rendering",type:"url"}]},{key:"1",label:"Components In-Depth",children:[{key:"1-0",label:"Component Registration",data:"https://vuejs.org/guide/components/registration.html#component-registration",type:"url"},{key:"1-1",label:"Props",data:"https://vuejs.org/guide/components/props.html#props",type:"url"},{key:"1-2",label:"Components Events",data:"https://vuejs.org/guide/components/events.html#component-events",type:"url"},{key:"1-3",label:"Slots",data:"https://vuejs.org/guide/components/slots.html#slots",type:"url"}]}],sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <Tree :value=\"nodes\">\n            <template #default=\"slotProps\">\n                <b>{{slotProps.node.label}}</b>\n            </template>\n            <template #url=\"slotProps\">\n                <a :href=\"slotProps.node.data\">{{slotProps.node.label}}</a>\n            </template>\n        </Tree>\n    </div>                  \n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            nodes: [\n                {\n                    key: '0',\n                    label: 'Introduction',\n                    children: [\n                        {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},\n                        {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},\n                        {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},\n                        {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}\n                    ]\n                },\n                {\n                    key: '1',\n                    label: 'Components In-Depth',\n                    children: [\n                        {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},\n                        {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},\n                        {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},\n                        {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}\n                    ]\n                }\n            ]\n        }\n    }\n}\n<\\/script>\n\n<style scoped lang=\"scss\">\nbutton {\n    margin-right: .5rem;\n}\n\n::v-deep(.p-tree) {\n    a {\n        color: #2196f3;\n        text-decoration: none;\n    }\n}\n</style>"},"composition-api":{tabName:"Composition API Source",content:"\n<template>\n    <div>\n        <Tree :value=\"nodes\">\n            <template #default=\"slotProps\">\n                <b>{{slotProps.node.label}}</b>\n            </template>\n            <template #url=\"slotProps\">\n                <a :href=\"slotProps.node.data\">{{slotProps.node.label}}</a>\n            </template>\n        </Tree>\n    </div>                  \n</template>\n\n<script>\nimport { ref } from 'vue';\n\nexport default {\n    setup() {\n        const nodes = ref([\n            {\n                key: '0',\n                label: 'Introduction',\n                children: [\n                    {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},\n                    {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},\n                    {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},\n                    {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}\n                ]\n            },\n            {\n                key: '1',\n                label: 'Components In-Depth',\n                children: [\n                    {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},\n                    {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},\n                    {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},\n                    {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}\n                ]\n            }\n        ]);\n\n        return { nodes }\n    }\n}\n<\\/script>\n\n<style scoped lang=\"scss\">\nbutton {\n    margin-right: .5rem;\n}\n\n::v-deep(.p-tree) {\n    a {\n        color: #2196f3;\n        text-decoration: none;\n    }\n}\n</style>"},"browser-source":{tabName:"Browser Source",imports:'<script src="./NodeService.js"><\\/script>',content:"<div id=\"app\">\n            <p-tree :value=\"nodes\">\n                <template #default=\"slotProps\">\n                    <b>{{slotProps.node.label}}</b>\n                </template>\n                <template #url=\"slotProps\">\n                    <a :href=\"slotProps.node.data\">{{slotProps.node.label}}</a>\n                </template>\n            </p-tree>\n        </div>                  \n\n        <script type=\"module\">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const nodes = ref([\n                    {\n                        key: '0',\n                        label: 'Introduction',\n                        children: [\n                            {key: '0-0', label: 'What is Vue.js?', data:'https://vuejs.org/guide/introduction.html#what-is-vue', type: 'url'},\n                            {key: '0-1', label: 'Quick Start', data: 'https://vuejs.org/guide/quick-start.html#quick-start', type: 'url'},\n                            {key: '0-2', label: 'Creating a Vue Application', data:'https://vuejs.org/guide/essentials/application.html#creating-a-vue-application', type:'url'},\n                            {key: '0-3', label: 'Conditionals Rendering', data: 'https://vuejs.org/guide/essentials/conditional.html#conditional-rendering', type: 'url'}\n                        ]\n                    },\n                    {\n                        key: '1',\n                        label: 'Components In-Depth',\n                        children: [\n                            {key: '1-0', label: 'Component Registration', data: 'https://vuejs.org/guide/components/registration.html#component-registration', type: 'url'},\n                            {key: '1-1', label: 'Props', data: 'https://vuejs.org/guide/components/props.html#props', type: 'url'},\n                            {key: '1-2', label: 'Components Events', data: 'https://vuejs.org/guide/components/events.html#component-events', type: 'url'},\n                            {key: '1-3', label: 'Slots', data: 'https://vuejs.org/guide/components/slots.html#slots', type: 'url'}\n                        ]\n                    }\n                ]);\n\n                return { nodes }\n            },\n            components: {\n                \"p-tree\": primevue.tree\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount(\"#app\");\n        <\\/script>\n\n        <style>\n        .p-button {\n            margin-right: .5rem;\n        }\n\n        .p-tree a {\n            color: #2196f3;\n            text-decoration: none;\n        }\n        </style>"}}}}},d=(n("bdac"),n("6b0d")),m=n.n(d);const g=m()(c,[["render",u],["__scopeId","data-v-57a2ce90"]]);t["default"]=g}}]);