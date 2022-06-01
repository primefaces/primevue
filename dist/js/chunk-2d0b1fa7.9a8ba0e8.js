(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b1fa7"],{"21c5":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o={class:"content-section introduction"},i=Object(c["k"])("div",{class:"feature-intro"},[Object(c["k"])("h1",null,"ConfirmPopup"),Object(c["k"])("p",null,"ConfirmPopup displays a confirmation overlay displayed relatively to its target.")],-1),l={class:"content-section implementation"},r={class:"flex p-4"},a={class:"pl-2"},s={class:"card"},u=Object(c["k"])("h5",null,"Overlay",-1),p=Object(c["k"])("h5",null,"Templating",-1);function m(e,t,n,m,d,b){var j=Object(c["O"])("AppDemoActions"),O=Object(c["O"])("ConfirmPopup"),f=Object(c["O"])("Button"),k=Object(c["O"])("ConfirmPopupDoc");return Object(c["G"])(),Object(c["j"])("div",null,[Object(c["k"])("div",o,[i,Object(c["o"])(j)]),Object(c["k"])("div",l,[Object(c["o"])(O),Object(c["o"])(O,{group:"demo"},{message:Object(c["Y"])((function(e){return[Object(c["k"])("div",r,[Object(c["k"])("i",{class:Object(c["z"])(e.message.icon),style:{"font-size":"1.5rem"}},null,2),Object(c["k"])("p",a,Object(c["S"])(e.message.message),1)])]})),_:1}),Object(c["k"])("div",s,[u,Object(c["o"])(f,{onClick:t[0]||(t[0]=function(e){return b.confirm1(e)}),icon:"pi pi-check",label:"Confirm",class:"mr-2"}),Object(c["o"])(f,{onClick:t[1]||(t[1]=function(e){return b.confirm2(e)}),icon:"pi pi-times",label:"Delete",class:"p-button-danger p-button-outlined"}),p,Object(c["o"])(f,{onClick:t[2]||(t[2]=function(e){return b.showTemplate(e)}),icon:"pi pi-check",label:"Terms and Conditions",class:"mr-2"})])]),Object(c["o"])(k)])}var d=Object(c["k"])("h5",null,"ConfirmationService",-1),b=Object(c["k"])("p",null,[Object(c["n"])("ConfirmPopup is controlled via the "),Object(c["k"])("i",null,"ConfirmationService"),Object(c["n"])(" that needs to be installed globally before the application instance is created.")],-1),j=Object(c["k"])("code",null,"\nimport {createApp} from 'vue';\nimport ConfirmationService from 'primevue/confirmationservice';\n\nconst app = createApp(App);\napp.use(ConfirmationService);\n\n",-1),O=[j],f=Object(c["k"])("h5",null,"Import via Module",-1),k=Object(c["k"])("code",null,"\nimport ConfirmPopup from 'primevue/confirmpopup';\n\n",-1),h=[k],v=Object(c["k"])("h5",null,"Import via CDN",-1),g=Object(c["k"])("code",null,'\n<script src="https://unpkg.com/primevue@^3/core/core.min.js"><\/script>\n<script src="https://unpkg.com/primevue@^3/confirmpopup/confirmpopup.min.js"><\/script>\n\n',-1),y=[g],C=Object(c["k"])("h5",null,"Getting Started",-1),w=Object(c["k"])("p",null,[Object(c["n"])("ConfirmPopup is displayed by calling the "),Object(c["k"])("i",null,"require"),Object(c["n"])(" method of the "),Object(c["k"])("i",null,"$confirm"),Object(c["n"])(" instance by passing the options to customize the Popup. "),Object(c["k"])("i",null,"target"),Object(c["n"])(" attribute is mandatory to align the popup to its caller.")],-1),P=Object(c["k"])("code",null,'\n<ConfirmPopup></ConfirmPopup>\n\n<Button @click="delete($event)" icon="pi pi-check" label="Confirm"></Button>\n\n',-1),T=[P],D=Object(c["k"])("code",null,"\nexport default {\n\tmethods: {\n        delete(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                message: 'Are you sure you want to proceed?',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    //callback to execute when user confirms the action\n                },\n                reject: () => {\n                    //callback to execute when user rejects the action\n                }\n            });\n        },\n    }\n}\n\n",-1),$=[D],Y=Object(c["k"])("h5",null,"Composition API",-1),x=Object(c["k"])("p",null,[Object(c["n"])("The service can be injected with the "),Object(c["k"])("i",null,"useConfirm"),Object(c["n"])(" function.")],-1),q=Object(c["k"])("code",null,"\nimport { defineComponent } from \"vue\";\nimport { useConfirm } from \"primevue/useconfirm\";\n\nexport default defineComponent({\n    setup() {\n        const confirm = useConfirm();\n\n        function delete(event) {\n            confirm.require({\n                message: 'Are you sure you want to proceed?',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    //callback to execute when user confirms the action\n                },\n                reject: () => {\n                    //callback to execute when user rejects the action\n                }\n            });\n        } \n        \n        return {delete};\n    }\n})\n\n",-1),A=[q],I=Object(c["k"])("h5",null,"Close Confirmation",-1),B=Object(c["k"])("p",null,[Object(c["n"])("The popup can also be hidden programmatically using the "),Object(c["k"])("i",null,"close"),Object(c["n"])(" method.")],-1),R=Object(c["k"])("code",null,"\nexport default {\n\tmethods: {\n        discard() {\n            this.$confirm.close();\n        }\n    }\n}\n\n",-1),S=[R],G=Object(c["k"])("h5",null,"Templating",-1),N=Object(c["k"])("p",null,"Templating allows customizing the content where the message instance is available as the implicit variable.",-1),z=Object(c["k"])("code",null,[Object(c["k"])("template",null,[Object(c["n"])('\n<ConfirmPopup group="demo">\n    <template #message="slotProps">\n        <div class="flex p-4">\n            <i :class="slotProps.message.icon" style="font-size: 1.5rem"></i>\n            <p class="pl-2">{{slotProps.message.message}}</p>\n        </div>\n    </template>\n</ConfirmPopup>\n\n')]),Object(c["n"])("\n")],-1),Z=[z],L=Object(c["k"])("h5",null,"Confirmation Options",-1),_=Object(c["k"])("p",null,"ConfirmDialog can be customized with various options listed here.",-1),F={class:"doc-tablewrapper"},M={class:"doc-table"},E=Object(c["k"])("thead",null,[Object(c["k"])("tr",null,[Object(c["k"])("th",null,"Name"),Object(c["k"])("th",null,"Type"),Object(c["k"])("th",null,"Default"),Object(c["k"])("th",null,"Description")])],-1),V=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"target"),Object(c["k"])("td",null,"DomElement"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Element to align the overlay.")],-1),J=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"message"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Message of the confirmation.")],-1),H=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"group"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.")],-1),K=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"icon"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Icon to display next to the message.")],-1),Q=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"accept"),Object(c["k"])("td",null,"Function"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Callback to execute when action is confirmed.")],-1),U=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"reject"),Object(c["k"])("td",null,"Function"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Callback to execute when action is rejected.")],-1),W=Object(c["k"])("td",null,"acceptLabel",-1),X=Object(c["k"])("td",null,"string",-1),ee=Object(c["k"])("td",null,"null",-1),te=Object(c["n"])("Label of the accept button. Defaults to PrimeVue "),ne=Object(c["n"])("Locale"),ce=Object(c["n"])(" configuration."),oe=Object(c["k"])("td",null,"rejectLabel",-1),ie=Object(c["k"])("td",null,"string",-1),le=Object(c["k"])("td",null,"null",-1),re=Object(c["n"])("Label of the reject button. Defaults to PrimeVue "),ae=Object(c["n"])("Locale"),se=Object(c["n"])(" configuration."),ue=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"acceptIcon"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Icon of the accept button.")],-1),pe=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"rejectIcon"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Icon of the reject button.")],-1),me=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"acceptClass"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Style class of the accept button.")],-1),de=Object(c["k"])("tr",null,[Object(c["k"])("td",null,"rejectClass"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Style class of the reject button.")],-1),be=Object(c["k"])("h5",null,"ConfirmationService",-1),je=Object(c["k"])("div",{class:"doc-tablewrapper"},[Object(c["k"])("table",{class:"doc-table"},[Object(c["k"])("thead",null,[Object(c["k"])("tr",null,[Object(c["k"])("th",null,"Name"),Object(c["k"])("th",null,"Parameters"),Object(c["k"])("th",null,"Description")])]),Object(c["k"])("tbody",null,[Object(c["k"])("tr",null,[Object(c["k"])("td",null,"require"),Object(c["k"])("td",null,"confirm: Confirmation Object"),Object(c["k"])("td",null,"Displays the dialog using the confirmation object options.")]),Object(c["k"])("tr",null,[Object(c["k"])("td",null,"close"),Object(c["k"])("td",null,"-"),Object(c["k"])("td",null,"Hides the dialog without invoking accept or reject callbacks.")])])])],-1),Oe=Object(c["k"])("h5",null,"Properties",-1),fe=Object(c["k"])("p",null,"Any property as style and class are passed to the main container element. Following are the additional properties to configure the component.",-1),ke=Object(c["k"])("div",{class:"doc-tablewrapper"},[Object(c["k"])("table",{class:"doc-table"},[Object(c["k"])("thead",null,[Object(c["k"])("tr",null,[Object(c["k"])("th",null,"Name"),Object(c["k"])("th",null,"Type"),Object(c["k"])("th",null,"Default"),Object(c["k"])("th",null,"Description")])]),Object(c["k"])("tbody",null,[Object(c["k"])("tr",null,[Object(c["k"])("td",null,"group"),Object(c["k"])("td",null,"string"),Object(c["k"])("td",null,"null"),Object(c["k"])("td",null,"Optional key to match the key of the confirmation, useful to target a specific confirm dialog instance.")])])])],-1),he=Object(c["k"])("h5",null,"Slots",-1),ve=Object(c["k"])("div",{class:"doc-tablewrapper"},[Object(c["k"])("table",{class:"doc-table"},[Object(c["k"])("thead",null,[Object(c["k"])("tr",null,[Object(c["k"])("th",null,"Name"),Object(c["k"])("th",null,"Parameters")])]),Object(c["k"])("tbody",null,[Object(c["k"])("tr",null,[Object(c["k"])("td",null,"message"),Object(c["k"])("td",null,"-")])])])],-1),ge=Object(c["k"])("h5",null,"Styling",-1),ye=Object(c["n"])("ConfirmDialog inherits all the classes from the Dialog component, visit "),Ce=Object(c["n"])("dialog"),we=Object(c["n"])(" for more information."),Pe=Object(c["k"])("div",{class:"doc-tablewrapper"},[Object(c["k"])("table",{class:"doc-table"},[Object(c["k"])("thead",null,[Object(c["k"])("tr",null,[Object(c["k"])("th",null,"Name"),Object(c["k"])("th",null,"Element")])]),Object(c["k"])("tbody",null,[Object(c["k"])("tr",null,[Object(c["k"])("td",null,"p-confirm-popup"),Object(c["k"])("td",null,"Container element.")]),Object(c["k"])("tr",null,[Object(c["k"])("td",null,"p-confirm-content"),Object(c["k"])("td",null,"Content element.")]),Object(c["k"])("tr",null,[Object(c["k"])("td",null,"p-confirm-popup-icon"),Object(c["k"])("td",null,"Message icon.")]),Object(c["k"])("tr",null,[Object(c["k"])("td",null,"p-confirm-popup-message"),Object(c["k"])("td",null,"Message text.")]),Object(c["k"])("tr",null,[Object(c["k"])("td",null,"p-confirm-popup-footer"),Object(c["k"])("td",null,"Footer element for buttons.")])])])],-1),Te=Object(c["k"])("h5",null,"Dependencies",-1),De=Object(c["k"])("p",null,"None.",-1);function $e(e,t,n,o,i,l){var r=Object(c["O"])("router-link"),a=Object(c["O"])("AppDoc"),s=Object(c["P"])("code");return Object(c["G"])(),Object(c["h"])(a,{name:"ConfirmPopupDemo",sources:i.sources,github:"confirmpopup/ConfirmPopupDemo.vue"},{default:Object(c["Y"])((function(){return[d,b,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,O)),[[s,void 0,void 0,{script:!0}]]),f,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,h)),[[s,void 0,void 0,{script:!0}]]),v,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,y)),[[s]]),C,w,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,T)),[[s]]),Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,$)),[[s,void 0,void 0,{script:!0}]]),Y,x,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,A)),[[s,void 0,void 0,{script:!0}]]),I,B,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,S)),[[s,void 0,void 0,{script:!0}]]),G,N,Object(c["Z"])((Object(c["G"])(),Object(c["j"])("pre",null,Z)),[[s]]),L,_,Object(c["k"])("div",F,[Object(c["k"])("table",M,[E,Object(c["k"])("tbody",null,[V,J,H,K,Q,U,Object(c["k"])("tr",null,[W,X,ee,Object(c["k"])("td",null,[te,Object(c["o"])(r,{to:"/locale"},{default:Object(c["Y"])((function(){return[ne]})),_:1}),ce])]),Object(c["k"])("tr",null,[oe,ie,le,Object(c["k"])("td",null,[re,Object(c["o"])(r,{to:"/locale"},{default:Object(c["Y"])((function(){return[ae]})),_:1}),se])]),ue,pe,me,de])])]),be,je,Oe,fe,ke,he,ve,ge,Object(c["k"])("p",null,[ye,Object(c["o"])(r,{to:"/dialog"},{default:Object(c["Y"])((function(){return[Ce]})),_:1}),we]),Pe,Te,De]})),_:1},8,["sources"])}var Ye={data:function(){return{sources:{"options-api":{tabName:"Options API Source",content:"\n<template>\n    <div>\n        <ConfirmPopup></ConfirmPopup>\n        <ConfirmPopup group=\"demo\">\n            <template #message=\"slotProps\">\n                <div class=\"flex p-4\">\n                    <i :class=\"slotProps.message.icon\" style=\"font-size: 1.5rem\"></i>\n                    <p class=\"pl-2\">{{slotProps.message.message}}</p>\n                </div>\n            </template>\n        </ConfirmPopup>\n        <Toast />\n\n        <div class=\"card\">\n            <h5>Overlay</h5>\n            <Button @click=\"confirm1($event)\" icon=\"pi pi-check\" label=\"Confirm\" class=\"mr-2\"></Button>\n            <Button @click=\"confirm2($event)\" icon=\"pi pi-times\" label=\"Delete\" class=\"p-button-danger p-button-outlined\"></Button>\n    \n            <h5>Templating</h5>\n            <Button @click=\"showTemplate($event)\" icon=\"pi pi-check\" label=\"Terms and Conditions\" class=\"mr-2\"></Button>\n        </div>\n    </div>\n</template>\n\n<script>\nexport default {\n    methods: {\n        confirm1(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                message: 'Are you sure you want to proceed?',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        },\n        confirm2(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                message: 'Do you want to delete this record?',\n                icon: 'pi pi-info-circle',\n                acceptClass: 'p-button-danger',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        },\n        showTemplate(event) {\n            this.$confirm.require({\n                target: event.currentTarget,\n                group: 'demo',\n                message: 'Do you accept that?',\n                icon: 'pi pi-question-circle',\n                acceptIcon: 'pi pi-check',\n                rejectIcon: 'pi pi-times',\n                accept: () => {\n                    this.$toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                },\n                reject: () => {\n                    this.$toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        }\n    }\n}\n<\\/script>\n"},"composition-api":{tabName:"Composition API Source",content:"<template>\n    <div>\n        <ConfirmPopup></ConfirmPopup>\n        <ConfirmPopup group=\"demo\">\n            <template #message=\"slotProps\">\n                <div class=\"flex p-4\">\n                    <i :class=\"slotProps.message.icon\" style=\"font-size: 1.5rem\"></i>\n                    <p class=\"pl-2\">{{slotProps.message.message}}</p>\n                </div>\n            </template>\n        </ConfirmPopup>\n        <Toast />\n\n        <div class=\"card\">\n            <h5>Overlay</h5>\n            <Button @click=\"confirm1($event)\" icon=\"pi pi-check\" label=\"Confirm\" class=\"mr-2\"></Button>\n            <Button @click=\"confirm2($event)\" icon=\"pi pi-times\" label=\"Delete\" class=\"p-button-danger p-button-outlined\"></Button>\n    \n            <h5>Templating</h5>\n            <Button @click=\"showTemplate($event)\" icon=\"pi pi-check\" label=\"Terms and Conditions\" class=\"mr-2\"></Button>\n        </div>\n    </div>\n</template>\n\n<script>\nimport { defineComponent } from \"vue\";\nimport { useConfirm } from \"primevue/useconfirm\";\nimport { useToast } from \"primevue/usetoast\";\n\nexport default defineComponent({\n    setup() {\n        const confirm = useConfirm();\n        const toast = useToast();\n\n        const confirm1 = (event) => {\n            confirm.require({\n                target: event.currentTarget,\n                message: 'Are you sure you want to proceed?',\n                icon: 'pi pi-exclamation-triangle',\n                accept: () => {\n                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                },\n                reject: () => {\n                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        }\n\n        const confirm2 = (event) => {\n            confirm.require({\n                target: event.currentTarget,\n                message: 'Do you want to delete this record?',\n                icon: 'pi pi-info-circle',\n                acceptClass: 'p-button-danger',\n                accept: () => {\n                    toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});\n                },\n                reject: () => {\n                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        }\n\n        const showTemplate = (event) => {\n            confirm.require({\n                target: event.currentTarget,\n                group: 'demo',\n                message: 'Do you accept that?',\n                icon: 'pi pi-question-circle',\n                acceptIcon: 'pi pi-check',\n                rejectIcon: 'pi pi-times',\n                accept: () => {\n                    toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                },\n                reject: () => {\n                    toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                }\n            });\n        }\n\n        return { confirm1, confirm2, showTemplate };\n    },\n})\n<\\/script>\n"},"browser-source":{tabName:"Browser Source",imports:'<script src="https://unpkg.com/primevue@^3/confirmpopup/confirmpopup.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/confirmationservice/confirmationservice.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toast/toast.min.js"><\\/script>\n        <script src="https://unpkg.com/primevue@^3/toastservice/toastservice.min.js"><\\/script>',content:"<div id=\"app\">\n            <p-confirmpopup></p-confirmpopup>\n            <p-confirmpopup group=\"demo\">\n                <template #message=\"slotProps\">\n                    <div class=\"flex p-4\">\n                        <i :class=\"slotProps.message.icon\" style=\"font-size: 1.5rem\"></i>\n                        <p class=\"pl-2\">{{slotProps.message.message}}</p>\n                    </div>\n                </template>\n            </p-confirmpopup>\n            <p-toast></p-toast>\n\n            <div class=\"card\">\n                <h5>Overlay</h5>\n                <p-button @click=\"confirm1($event)\" icon=\"pi pi-check\" label=\"Confirm\" class=\"mr-2\"></p-button>\n                <p-button @click=\"confirm2($event)\" icon=\"pi pi-times\" label=\"Delete\" class=\"p-button-danger p-button-outlined\"></p-button>\n\n                <h5>Templating</h5>\n                <p-button @click=\"showTemplate($event)\" icon=\"pi pi-check\" label=\"Terms and Conditions\" class=\"mr-2\"></p-button>\n            </div>\n        </div>\n\n        <script type=\"module\">\n        const { createApp } = Vue;\n        const { useConfirm } = primevue.useconfirm;\n        const { useToast } = primevue.usetoast;\n\n        const App = {\n            setup() {\n                const confirm = useConfirm();\n                const toast = useToast();\n\n                const confirm1 = (event) => {\n                    confirm.require({\n                        target: event.currentTarget,\n                        message: 'Are you sure you want to proceed?',\n                        icon: 'pi pi-exclamation-triangle',\n                        accept: () => {\n                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                        },\n                        reject: () => {\n                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                        }\n                    });\n                }\n\n                const confirm2 = (event) => {\n                    confirm.require({\n                        target: event.currentTarget,\n                        message: 'Do you want to delete this record?',\n                        icon: 'pi pi-info-circle',\n                        acceptClass: 'p-button-danger',\n                        accept: () => {\n                            toast.add({severity:'info', summary:'Confirmed', detail:'Record deleted', life: 3000});\n                        },\n                        reject: () => {\n                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                        }\n                    });\n                }\n\n                const showTemplate = (event) => {\n                    confirm.require({\n                        target: event.currentTarget,\n                        group: 'demo',\n                        message: 'Do you accept that?',\n                        icon: 'pi pi-question-circle',\n                        acceptIcon: 'pi pi-check',\n                        rejectIcon: 'pi pi-times',\n                        accept: () => {\n                            toast.add({severity:'info', summary:'Confirmed', detail:'You have accepted', life: 3000});\n                        },\n                        reject: () => {\n                            toast.add({severity:'error', summary:'Rejected', detail:'You have rejected', life: 3000});\n                        }\n                    });\n                }\n\n                return { confirm1, confirm2, showTemplate };\n            },\n            components: {\n                \"p-confirmpopup\": primevue.confirmpopup,\n                \"p-toast\": primevue.toast,\n                \"p-button\": primevue.button\n            }\n        };\n\n        createApp(App)\n            .use(primevue.config.default)\n            .use(primevue.confirmationservice)\n            .use(primevue.toastservice)\n            .mount(\"#app\");\n        <\\/script>\n"}}}}},xe=n("6b0d"),qe=n.n(xe);const Ae=qe()(Ye,[["render",$e]]);var Ie=Ae,Be={methods:{confirm1:function(e){var t=this;this.$confirm.require({target:e.currentTarget,message:"Are you sure you want to proceed?",icon:"pi pi-exclamation-triangle",accept:function(){t.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:function(){t.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},confirm2:function(e){var t=this;this.$confirm.require({target:e.currentTarget,message:"Do you want to delete this record?",icon:"pi pi-info-circle",acceptClass:"p-button-danger",accept:function(){t.$toast.add({severity:"info",summary:"Confirmed",detail:"Record deleted",life:3e3})},reject:function(){t.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})},showTemplate:function(e){var t=this;this.$confirm.require({target:e.currentTarget,group:"demo",message:"Do you accept that?",icon:"pi pi-question-circle",acceptIcon:"pi pi-check",rejectIcon:"pi pi-times",accept:function(){t.$toast.add({severity:"info",summary:"Confirmed",detail:"You have accepted",life:3e3})},reject:function(){t.$toast.add({severity:"error",summary:"Rejected",detail:"You have rejected",life:3e3})}})}},components:{ConfirmPopupDoc:Ie}};const Re=qe()(Be,[["render",m]]);t["default"]=Re}}]);