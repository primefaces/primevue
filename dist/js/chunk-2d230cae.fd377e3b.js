(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230cae"],{ee91:function(t,n,e){"use strict";e.r(n);var a=e("7a23"),o={class:"content-section introduction"},r=Object(a["k"])("div",{class:"feature-intro"},[Object(a["k"])("h1",null,"DoughnutChart"),Object(a["k"])("p",null,"A doughnut chart is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included.")],-1),c={class:"content-section implementation"},i={class:"card flex justify-content-center"};function s(t,n,e,s,h,u){var l=Object(a["O"])("AppDemoActions"),d=Object(a["O"])("Chart"),p=Object(a["O"])("DoughnutChartDoc");return Object(a["G"])(),Object(a["j"])("div",null,[Object(a["k"])("div",o,[r,Object(a["o"])(l)]),Object(a["k"])("div",c,[Object(a["k"])("div",i,[Object(a["o"])(d,{type:"doughnut",data:h.chartData,options:h.chartOptions,style:{width:"40%"}},null,8,["data","options"])])]),Object(a["o"])(p)])}function h(t,n,e,o,r,c){var i=Object(a["O"])("AppDoc");return Object(a["G"])(),Object(a["h"])(i,{name:"ChartDemo",sources:r.sources,dependencies:{"chart.js":"3.3.2"},component:"Chart",github:"chart/DoughnutChartDemo.vue"},null,8,["sources","dependencies"])}var u={data:function(){return{sources:{"options-api":{tabName:"Source",content:'\n<template>\n    <div>\n        <Chart type="doughnut" :data="chartData" :options="lightOptions" />\n    </div>\n</template>\n\n<script>\nexport default {\n    data() {\n        return {\n            chartData: {\n                labels: [\'A\',\'B\',\'C\'],\n                datasets: [\n                    {\n                        data: [300, 50, 100],\n                        backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],\n                        hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]\n                    }\n                ]\n            },\n\t\t\tlightOptions: {\n\t\t\t\tplugins: {\n                    legend: {\n                        labels: {\n                            color: \'#495057\'\n                        }\n                    }\n                }\n\t\t\t}\n        }\n    }\n}\n<\\/script>\n'},"composition-api":{tabName:"Composition API",content:'\n<template>\n    <div>\n        <Chart type="doughnut" :data="chartData" :options="lightOptions" />\n    </div>\n</template>\n\n<script>\nimport { ref } from \'vue\';\n\nexport default {\n    setup() {\n\t\tconst chartData = ref({\n\t\t    labels: [\'A\',\'B\',\'C\'],\n\t\t    datasets: [\n\t\t        {\n\t\t            data: [300, 50, 100],\n\t\t            backgroundColor: ["#FF6384","#36A2EB","#FFCE56"],\n\t\t            hoverBackgroundColor: ["#FF6384","#36A2EB","#FFCE56"]\n\t\t        }\n\t\t    ]\n\t\t});\n\n\t\tconst lightOptions = ref({\n\t\t\tplugins: {\n                legend: {\n                    labels: {\n                        color: \'#495057\'\n                    }\n                }\n            }\n\t\t});\n\n\t\treturn { chartData, lightOptions }\n    }\n}\n<\\/script>\n'}}}}},l=e("6b0d"),d=e.n(l);const p=d()(u,[["render",h]]);var g=p,b=e("11f3"),m={themeChangeListener:null,mounted:function(){var t=this;this.themeChangeListener=function(n){n.dark?t.chartOptions=t.getDarkTheme():t.chartOptions=t.getLightTheme()},b["a"].on("theme-change",this.themeChangeListener)},beforeUnmount:function(){b["a"].off("change-theme",this.themeChangeListener)},data:function(){return{chartData:{labels:["A","B","C"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},chartOptions:this.isDarkTheme()?this.getDarkTheme():this.getLightTheme()}},methods:{isDarkTheme:function(){return!0===this.$appState.darkTheme},getLightTheme:function(){return{plugins:{legend:{labels:{color:"#495057"}}}}},getDarkTheme:function(){return{plugins:{legend:{labels:{color:"#ebedef"}}}}}},components:{DoughnutChartDoc:g}};const O=d()(m,[["render",s]]);n["default"]=O}}]);