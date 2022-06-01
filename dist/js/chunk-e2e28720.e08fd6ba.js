(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2e28720"],{1241:function(e,t,l){var n=l("24fb");t=n(!1),t.push([e.i,".p-inputtext[data-v-13301011],.p-slider-horizontal[data-v-13301011]{width:14rem}.p-slider-vertical[data-v-13301011]{height:14rem}",""]),e.exports=t},"42ff":function(e,t,l){"use strict";l("f578")},"9b66":function(e,t,l){"use strict";l.r(t);var n=l("7a23"),u=function(e){return Object(n["J"])("data-v-13301011"),e=e(),Object(n["H"])(),e},a={class:"content-section introduction"},c=u((function(){return Object(n["k"])("div",{class:"feature-intro"},[Object(n["k"])("h1",null,"Slider"),Object(n["k"])("p",null,"Slider is an input component to provide a numerical input.")],-1)})),r={class:"content-section implementation"},o={class:"card"};function i(e,t,l,u,i,d){var b=Object(n["O"])("AppDemoActions"),s=Object(n["O"])("Slider"),p=Object(n["O"])("InputText"),v=Object(n["O"])("SliderDoc");return Object(n["G"])(),Object(n["j"])("div",null,[Object(n["k"])("div",a,[c,Object(n["o"])(b)]),Object(n["k"])("div",r,[Object(n["k"])("div",o,[Object(n["k"])("h5",null,"Basic: "+Object(n["S"])(i.value1),1),Object(n["o"])(s,{modelValue:i.value1,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.value1=e})},null,8,["modelValue"]),Object(n["k"])("h5",null,"Input: "+Object(n["S"])(i.value2),1),Object(n["o"])(p,{modelValue:i.value2,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.value2=e}),modelModifiers:{number:!0}},null,8,["modelValue"]),Object(n["o"])(s,{modelValue:i.value2,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.value2=e})},null,8,["modelValue"]),Object(n["k"])("h5",null,"Step: "+Object(n["S"])(i.value3),1),Object(n["o"])(s,{modelValue:i.value3,"onUpdate:modelValue":t[3]||(t[3]=function(e){return i.value3=e}),step:20},null,8,["modelValue"]),Object(n["k"])("h5",null,"Decimal Step: "+Object(n["S"])(i.value4),1),Object(n["o"])(s,{modelValue:i.value4,"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.value4=e}),step:.5},null,8,["modelValue","step"]),Object(n["k"])("h5",null,"Range: "+Object(n["S"])(i.value5),1),Object(n["o"])(s,{modelValue:i.value5,"onUpdate:modelValue":t[5]||(t[5]=function(e){return i.value5=e}),range:!0},null,8,["modelValue"]),Object(n["k"])("h5",null,"Vertical: "+Object(n["S"])(i.value6),1),Object(n["o"])(s,{modelValue:i.value6,"onUpdate:modelValue":t[6]||(t[6]=function(e){return i.value6=e}),orientation:"vertical"},null,8,["modelValue"])])]),Object(n["o"])(v)])}var d=Object(n["k"])("h5",null,"Import via Module",-1),b=Object(n["k"])("code",null,"\nimport Slider from 'primevue/slider';\n\n",-1),s=[b],p=Object(n["k"])("h5",null,"Import via CDN",-1),v=Object(n["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\/script>\n\n',-1),j=[v],O=Object(n["k"])("h5",null,"Getting Started",-1),m=Object(n["k"])("p",null,"Two-way binding is defined using the standard v-model directive.",-1),k=Object(n["k"])("code",null,'\n<Slider v-model="value" />\n\n',-1),h=[k],f=Object(n["k"])("h5",null,"Range",-1),S=Object(n["k"])("p",null,[Object(n["n"])("Range slider provides two handles to define two values. Enable "),Object(n["k"])("i",null,"range"),Object(n["n"])(" property and bind an array to implement a range slider.")],-1),g=Object(n["k"])("code",null,'\n<Slider v-model="value" :range="true" />\n\n',-1),w=[g],V=Object(n["k"])("code",null,"\nexport default {\n\tdata() {\n\t\treturn {\n\t\t\tvalue: [20,80]\n\t\t}\n\t}\n}\n\n",-1),y=[V],x=Object(n["k"])("h5",null,"Orientation",-1),D=Object(n["k"])("p",null,[Object(n["n"])("Default layout of slider is horizontal, use "),Object(n["k"])("i",null,"orientation"),Object(n["n"])(" property for the alternative vertical mode.")],-1),I=Object(n["k"])("code",null,'\n<Slider v-model="value" orientation="vertical" />\n\n',-1),G=[I],A=Object(n["k"])("h5",null,"Step",-1),M=Object(n["k"])("p",null,[Object(n["n"])("Step factor is 1 by default and can be customized with "),Object(n["k"])("i",null,"step"),Object(n["n"])(" option.")],-1),N=Object(n["k"])("code",null,'\n<Slider v-model="value" :step="20" />\n\n',-1),z=[N],Z=Object(n["k"])("h5",null,"Min-Max",-1),B=Object(n["k"])("p",null,"Boundaries are specified with min and max attributes.",-1),U=Object(n["k"])("code",null,'\n<Slider v-model="value" :step="20" :min="50" :max="200" />\n\n',-1),R=[U],_=Object(n["k"])("h5",null,"Properties",-1),C=Object(n["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),E=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Type"),Object(n["k"])("th",null,"Default"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"modelValue"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"0"),Object(n["k"])("td",null,"Value of the component.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"min"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"0"),Object(n["k"])("td",null,"Mininum boundary value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"max"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"100"),Object(n["k"])("td",null,"Maximum boundary value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"orientation"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"horizontal"),Object(n["k"])("td",null,"Orientation of the slider, valid values are horizontal and vertical.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"step"),Object(n["k"])("td",null,"number"),Object(n["k"])("td",null,"1"),Object(n["k"])("td",null,"Step factor to increment/decrement the value.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"range"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"When speficed, allows two boundary values to be picked.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"disabled"),Object(n["k"])("td",null,"boolean"),Object(n["k"])("td",null,"false"),Object(n["k"])("td",null,"When present, it specifies that the component should be disabled.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"ariaLabelledBy"),Object(n["k"])("td",null,"string"),Object(n["k"])("td",null,"null"),Object(n["k"])("td",null,"Establishes relationships between the component and label(s) where its value should be one or more element IDs.")])])])],-1),P=Object(n["k"])("h5",null,"Events",-1),T=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Parameters"),Object(n["k"])("th",null,"Description")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"change"),Object(n["k"])("td",null,"value: Selected option value "),Object(n["k"])("td",null,"Callback to invoke on value change.")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"slideend"),Object(n["k"])("td",null,[Object(n["n"])("event.originalEvent: Original event "),Object(n["k"])("br"),Object(n["n"])(" event.value: New value. ")]),Object(n["k"])("td",null,"Callback to invoke when slide ends.")])])])],-1),J=Object(n["k"])("h5",null,"Styling",-1),F=Object(n["n"])("Following is the list of structural style classes, for theming classes visit "),H=Object(n["n"])("theming"),W=Object(n["n"])(" page."),Y=Object(n["k"])("div",{class:"doc-tablewrapper"},[Object(n["k"])("table",{class:"doc-table"},[Object(n["k"])("thead",null,[Object(n["k"])("tr",null,[Object(n["k"])("th",null,"Name"),Object(n["k"])("th",null,"Element")])]),Object(n["k"])("tbody",null,[Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-slider"),Object(n["k"])("td",null,"Container element")]),Object(n["k"])("tr",null,[Object(n["k"])("td",null,"p-slider-handle"),Object(n["k"])("td",null,"Handle element.")])])])],-1),L=Object(n["k"])("h5",null,"Dependencies",-1),q=Object(n["k"])("p",null,"None.",-1);function K(e,t,l,u,a,c){var r=Object(n["O"])("router-link"),o=Object(n["O"])("AppDoc"),i=Object(n["P"])("code");return Object(n["G"])(),Object(n["h"])(o,{name:"SliderDemo",sources:a.sources,github:"slider/SliderDemo.vue"},{default:Object(n["Y"])((function(){return[d,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,s)),[[i,void 0,void 0,{script:!0}]]),p,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,j)),[[i]]),O,m,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,h)),[[i]]),f,S,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,w)),[[i]]),Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,y)),[[i,void 0,void 0,{script:!0}]]),x,D,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,G)),[[i]]),A,M,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,z)),[[i]]),Z,B,Object(n["Z"])((Object(n["G"])(),Object(n["j"])("pre",null,R)),[[i]]),_,C,E,P,T,J,Object(n["k"])("p",null,[F,Object(n["o"])(r,{to:"/theming"},{default:Object(n["Y"])((function(){return[H]})),_:1}),W]),Y,L,q]})),_:1},8,["sources"])}var Q={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:'\n<template>\n    <div>\n        <h5>Basic: {{value1}}</h5>\n        <Slider v-model="value1" />\n\n        <h5>Input: {{value2}}</h5>\n        <InputText v-model.number="value2" />\n        <Slider v-model="value2" />\n\n        <h5>Step: {{value3}}</h5>\n        <Slider v-model="value3" :step="20" />\n\n        <h5>Decimal Step: {{value4}}</h5>\n        <Slider v-model="value4" :step="0.5" />\n\n        <h5>Range: {{value5}}</h5>\n        <Slider v-model="value5" :range="true" />\n\n        <h5>Vertical: {{value6}}</h5>\n        <Slider v-model="value6" orientation="vertical" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            value1: null,\n            value2: 50,\n            value3: 20,\n            value4: 30.5,\n            value5: [20,80],\n            value6: 50\n        }\n    }\n}\n<\\/script>\n\n<style scoped>\n.p-slider-horizontal, .p-inputtext {\n    width: 14rem;\n}\n.p-slider-vertical {\n     height: 14rem;\n}\n</style>'},"composition-api":{tabName:"Composition API Source",content:'\n<template>\n    <div>\n        <h5>Basic: {{value1}}</h5>\n        <Slider v-model="value1" />\n\n        <h5>Input: {{value2}}</h5>\n        <InputText v-model.number="value2" />\n        <Slider v-model="value2" />\n\n        <h5>Step: {{value3}}</h5>\n        <Slider v-model="value3" :step="20" />\n\n        <h5>Decimal Step: {{value4}}</h5>\n        <Slider v-model="value4" :step="0.5" />\n\n        <h5>Range: {{value5}}</h5>\n        <Slider v-model="value5" :range="true" />\n\n        <h5>Vertical: {{value6}}</h5>\n        <Slider v-model="value6" orientation="vertical" />\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n        const value1 = ref(null);\n        const value2 = ref(50);\n        const value3 = ref(20);\n        const value4 = ref(30.5);\n        const value5 = ref([20,80]);\n        const value6 = ref(50);\n\n        return { value1, value2, value3, value4, value5, value6 }\n    }\n}\n<\\/script>\n\n<style scoped>\n.p-slider-horizontal, .p-inputtext {\n    width: 14rem;\n}\n.p-slider-vertical {\n     height: 14rem;\n}\n</style>'},"browser-source":{imports:'<script src="https://unpkg.com/primevue@^3/slider/slider.min.js"><\\/script>',tabName:"Browser Source",content:'<div id="app">\n            <h5>Basic: {{value1}}</h5>\n            <p-slider v-model="value1"></p-slider>\n\n            <h5>Input: {{value2}}</h5>\n            <p-inputtext v-model.number="value2"></p-inputtext>\n            <p-slider v-model="value2"></p-slider>\n\n            <h5>Step: {{value3}}</h5>\n            <p-slider v-model="value3" :step="20"></p-slider>\n\n            <h5>Decimal Step: {{value4}}</h5>\n            <p-slider v-model="value4" :step="0.5"></p-slider>\n\n            <h5>Range: {{value5}}</h5>\n            <p-slider v-model="value5" :range="true"></p-slider>\n\n            <h5>Vertical: {{value6}}</h5>\n            <p-slider v-model="value6" orientation="vertical"></p-slider>\n        </div>\n\n        <script type="module">\n        const { createApp, ref } = Vue;\n\n        const App = {\n            setup() {\n                const value1 = ref(null);\n                const value2 = ref(50);\n                const value3 = ref(20);\n                const value4 = ref(30.5);\n                const value5 = ref([20,80]);\n                const value6 = ref(50);\n\n                return { value1, value2, value3, value4, value5, value6 }\n            },\n            components: {\n                "p-slider": primevue.slider,\n                "p-inputtext": primevue.inputtext\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .mount("#app");\n        <\\/script>\n\n        <style scoped>\n        .p-slider-horizontal, .p-inputtext {\n            width: 14rem;\n        }\n        .p-slider-vertical {\n            height: 14rem;\n        }\n        </style>'}}}}},X=l("6b0d"),$=l.n(X);const ee=$()(Q,[["render",K]]);var te=ee,le={data:function(){return{value1:null,value2:50,value3:20,value4:30.5,value5:[20,80],value6:50}},components:{SliderDoc:te}};l("42ff");const ne=$()(le,[["render",i],["__scopeId","data-v-13301011"]]);t["default"]=ne},f578:function(e,t,l){var n=l("1241");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var u=l("499e").default;u("030d50b7",n,!0,{sourceMap:!1,shadowMode:!1})}}]);