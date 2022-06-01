(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b2f90a1"],{1414:function(e,n,t){var l=t("5c8d");l.__esModule&&(l=l.default),"string"===typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);var a=t("499e").default;a("c763ff28",l,!0,{sourceMap:!1,shadowMode:!1})},"5c8d":function(e,n,t){var l=t("24fb");n=l(!1),n.push([e.i,"[data-v-0fae92db] .custom-galleria.fullscreen{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[data-v-0fae92db] .custom-galleria.fullscreen .p-galleria-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}[data-v-0fae92db] .custom-galleria .p-galleria-content{position:relative}[data-v-0fae92db] .custom-galleria .p-galleria-thumbnail-wrapper{position:absolute;bottom:0;left:0;width:100%}[data-v-0fae92db] .custom-galleria .p-galleria-thumbnail-items-container{width:100%}[data-v-0fae92db] .custom-galleria .custom-galleria-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(0,0,0,.9);color:#fff}[data-v-0fae92db] .custom-galleria .custom-galleria-footer>button{background-color:transparent;color:#fff;border:0 none;border-radius:0;margin:.2rem 0}[data-v-0fae92db] .custom-galleria .custom-galleria-footer>button.fullscreen-button{margin-left:auto}[data-v-0fae92db] .custom-galleria .custom-galleria-footer>button:hover{background-color:hsla(0,0%,100%,.1)}[data-v-0fae92db] .custom-galleria .title-container>span{font-size:.9rem;padding-left:.829rem}[data-v-0fae92db] .custom-galleria .title-container>span.title{font-weight:700}",""]),e.exports=n},"8bdd":function(e,n,t){"use strict";t.r(n);var l=t("7a23"),a=function(e){return Object(l["J"])("data-v-0fae92db"),e=e(),Object(l["H"])(),e},i={class:"galleria-demo"},c=a((function(){return Object(l["k"])("div",{class:"content-section introduction"},[Object(l["k"])("div",{class:"feature-intro"},[Object(l["k"])("h1",null,[Object(l["n"])("Galleria "),Object(l["k"])("span",null,"Advanced")]),Object(l["k"])("p",null,"Galleria can be extended further to implement complex requirements.")])],-1)})),o={class:"content-section implementation"},r={class:"card"},s=["src","alt"],u={class:"grid grid-nogutter justify-content-center"},d=["src","alt"],m={class:"custom-galleria-footer"},b={key:0,class:"title-container"},f={class:"title"},g={class:"content-section documentation"},p=a((function(){return Object(l["k"])("code",null,[Object(l["k"])("template",null,[Object(l["n"])('\n<Galleria ref="galleria" :value="images" v-model:activeIndex="activeIndex" :numVisible="5" containerStyle="max-width: 640px" :containerClass="galleriaClass"\n    :showThumbnails="showThumbnails" :showItemNavigators="true" :showItemNavigatorsOnHover="true"\n    :circular="true" :autoPlay="true" :transitionInterval="3000">\n    <template #item="slotProps">\n        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" :style="[{\'width\': !fullScreen ? \'100%\' : \'\', \'display\': !fullScreen ? \'block\' : \'\'}]" />\n    </template>\n    <template #thumbnail="slotProps">\n        <div class="grid grid-nogutter justify-content-center">\n            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />\n        </div>\n    </template>\n    <template #footer>\n        <div class="custom-galleria-footer">\n            <Button icon="pi pi-list" @click="onThumbnailButtonClick" />\n            <span v-if="images" class="title-container">\n                <span>{{activeIndex + 1}}/{{images.length}}</span>\n                <span class="title">{{images[activeIndex].title}}</span>\n                <span>{{images[activeIndex].alt}}</span>\n            </span>\n            <Button :icon="fullScreenIcon" @click="toggleFullScreen" class="fullscreen-button" />\n        </div>\n    </template>\n</Galleria>\n')]),Object(l["n"])("\n")],-1)})),h=[p],v=a((function(){return Object(l["k"])("code",null,"\nimport PhotoService from '../../service/PhotoService';\n\nexport default {\n    data() {\n        return {\n            images: null,\n\t\t\tresponsiveOptions: [\n\t\t\t\t{\n                    breakpoint: '1024px',\n                    numVisible: 5\n                },\n                {\n                    breakpoint: '768px',\n                    numVisible: 3\n                },\n                {\n                    breakpoint: '560px',\n                    numVisible: 1\n                }\n\t\t\t]\n        }\n    },\n    galleriaService: null,\n\tcreated() {\n\t\tthis.galleriaService = new PhotoService();\n\t},\n\tmounted() {\n\t\tthis.galleriaService.getImages().then(data => this.images = data);\n    }\n}\n\n",-1)})),j=[v],O=a((function(){return Object(l["k"])("code",null,"\n::v-deep(.custom-galleria) {\n    &.fullscreen {\n        display: flex;\n        flex-direction: column;\n\n        .p-galleria-content {\n            flex-grow: 1;\n            justify-content: center;\n        }\n    }\n\n    .p-galleria-content {\n        position: relative;\n    }\n\n    .p-galleria-thumbnail-wrapper {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n    }\n\n    .p-galleria-thumbnail-items-container {\n        width: 100%;\n    }\n\n    .custom-galleria-footer {\n        display: flex;\n        align-items: center;\n        background-color: rgba(0, 0, 0, .9);\n        color: #ffffff;\n\n        > button {\n            background-color: transparent;\n            color: #ffffff;\n            border: 0 none;\n            border-radius: 0;\n            margin: .2rem 0;\n\n            &.fullscreen-button {\n                margin-left: auto;\n            }\n\n            &:hover {\n                background-color: rgba(255, 255, 255, 0.1);\n            }\n        }\n    }\n\n    .title-container {\n        > span {\n            font-size: .9rem;\n            padding-left: .829rem;\n\n            &.title {\n                font-weight: bold;\n            }\n        }\n    }\n}\n\n",-1)})),k=[O];function x(e,n,t,a,p,v){var O=Object(l["O"])("Button"),x=Object(l["O"])("Galleria"),w=Object(l["O"])("TabPanel"),S=Object(l["O"])("TabView"),F=Object(l["P"])("code");return Object(l["G"])(),Object(l["j"])("div",i,[c,Object(l["k"])("div",o,[Object(l["k"])("div",r,[Object(l["o"])(x,{ref:"galleria",value:p.images,activeIndex:p.activeIndex,"onUpdate:activeIndex":n[0]||(n[0]=function(e){return p.activeIndex=e}),numVisible:5,containerStyle:"max-width: 640px",containerClass:v.galleriaClass,showThumbnails:p.showThumbnails,showItemNavigators:!0,showItemNavigatorsOnHover:!0,circular:!0,autoPlay:!0,transitionInterval:3e3},{item:Object(l["Y"])((function(e){return[Object(l["k"])("img",{src:e.item.itemImageSrc,alt:e.item.alt,style:Object(l["A"])([{width:p.fullScreen?"":"100%",display:p.fullScreen?"":"block"}])},null,12,s)]})),thumbnail:Object(l["Y"])((function(e){return[Object(l["k"])("div",u,[Object(l["k"])("img",{src:e.item.thumbnailImageSrc,alt:e.item.alt,style:{display:"block"}},null,8,d)])]})),footer:Object(l["Y"])((function(){return[Object(l["k"])("div",m,[Object(l["o"])(O,{icon:"pi pi-list",onClick:v.onThumbnailButtonClick},null,8,["onClick"]),p.images?(Object(l["G"])(),Object(l["j"])("span",b,[Object(l["k"])("span",null,Object(l["S"])(p.activeIndex+1)+"/"+Object(l["S"])(p.images.length),1),Object(l["k"])("span",f,Object(l["S"])(p.images[p.activeIndex].title),1),Object(l["k"])("span",null,Object(l["S"])(p.images[p.activeIndex].alt),1)])):Object(l["i"])("",!0),Object(l["o"])(O,{icon:v.fullScreenIcon,onClick:v.toggleFullScreen,class:"fullscreen-button"},null,8,["icon","onClick"])])]})),_:1},8,["value","activeIndex","containerClass","showThumbnails"])])]),Object(l["k"])("div",g,[Object(l["o"])(S,null,{default:Object(l["Y"])((function(){return[Object(l["o"])(w,{header:"Source"},{default:Object(l["Y"])((function(){return[Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,h)),[[F]]),Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,j)),[[F,void 0,void 0,{script:!0}]]),Object(l["Z"])((Object(l["G"])(),Object(l["j"])("pre",null,k)),[[F,void 0,void 0,{css:!0}]])]})),_:1})]})),_:1})])])}var w=t("cc2b"),S={data:function(){return{images:null,activeIndex:0,showThumbnails:!1,fullScreen:!1}},galleriaService:null,created:function(){this.galleriaService=new w["a"]},mounted:function(){var e=this;this.galleriaService.getImages().then((function(n){return e.images=n})),this.bindDocumentListeners()},methods:{onThumbnailButtonClick:function(){this.showThumbnails=!this.showThumbnails},toggleFullScreen:function(){this.fullScreen?this.closeFullScreen():this.openFullScreen()},onFullScreenChange:function(){this.fullScreen=!this.fullScreen},openFullScreen:function(){var e=this.$refs.galleria.$el;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()},closeFullScreen:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()},bindDocumentListeners:function(){document.addEventListener("fullscreenchange",this.onFullScreenChange),document.addEventListener("mozfullscreenchange",this.onFullScreenChange),document.addEventListener("webkitfullscreenchange",this.onFullScreenChange),document.addEventListener("msfullscreenchange",this.onFullScreenChange)},unbindDocumentListeners:function(){document.removeEventListener("fullscreenchange",this.onFullScreenChange),document.removeEventListener("mozfullscreenchange",this.onFullScreenChange),document.removeEventListener("webkitfullscreenchange",this.onFullScreenChange),document.removeEventListener("msfullscreenchange",this.onFullScreenChange)}},computed:{galleriaClass:function(){return["custom-galleria",{fullscreen:this.fullScreen}]},fullScreenIcon:function(){return"pi ".concat(this.fullScreen?"pi-window-minimize":"pi-window-maximize")}}},F=(t("c794"),t("6b0d")),I=t.n(F);const y=I()(S,[["render",x],["__scopeId","data-v-0fae92db"]]);n["default"]=y},c794:function(e,n,t){"use strict";t("1414")},cc2b:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var l=t("d4ec"),a=t("bee2"),i=(t("d3b7"),function(){function e(){Object(l["a"])(this,e)}return Object(a["a"])(e,[{key:"getImages",value:function(){return fetch("demo/data/photos.json").then((function(e){return e.json()})).then((function(e){return e.data}))}}]),e}())}}]);