(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d23041d"],{ec09:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),l={class:"stepsdemo-content"},o=Object(c["n"])(" Confirmation "),b={class:"field col-12"},r=Object(c["k"])("label",{for:"class"},"Name",-1),n={class:"field col-12"},f=Object(c["k"])("label",{for:"Age"},"Age",-1),s={class:"field col-12"},i=Object(c["k"])("label",{for:"Age"},"Seat Class",-1),j={class:"field col-12"},O=Object(c["k"])("label",{for:"Age"},"Wagon Number",-1),d={class:"field col-12"},m=Object(c["k"])("label",{for:"Age"},"Seat",-1),u={class:"field col-12"},k=Object(c["k"])("label",{for:"Age"},"Cardholder Name",-1),v={class:"field col-12"},g=Object(c["k"])("label",{for:"Age"},"Card Number",-1),D={class:"field col-12"},p=Object(c["k"])("label",{for:"Age"},"Date",-1),h={class:"field col-12"},S=Object(c["k"])("label",{for:"Age"},"CVV",-1),A={class:"grid grid-nogutter justify-content-between"};function C(e,t,a,C,N,w){var P=Object(c["O"])("Button"),Y=Object(c["O"])("Card");return Object(c["G"])(),Object(c["j"])("div",l,[Object(c["o"])(Y,null,{title:Object(c["Y"])((function(){return[o]})),content:Object(c["Y"])((function(){return[Object(c["k"])("div",b,[r,Object(c["k"])("b",null,Object(c["S"])(a.formData.firstname?a.formData.firstname:"-")+" "+Object(c["S"])(a.formData.lastname?a.formData.lastname:"-"),1)]),Object(c["k"])("div",n,[f,Object(c["k"])("b",null,Object(c["S"])(a.formData.age?a.formData.age:"-"),1)]),Object(c["k"])("div",s,[i,Object(c["k"])("b",null,Object(c["S"])(a.formData.class?a.formData.class:"-"),1)]),Object(c["k"])("div",j,[O,Object(c["k"])("b",null,Object(c["S"])(a.formData.vagon?a.formData.vagon:"-"),1)]),Object(c["k"])("div",d,[m,Object(c["k"])("b",null,Object(c["S"])(a.formData.seat?a.formData.seat:"-"),1)]),Object(c["k"])("div",u,[k,Object(c["k"])("b",null,Object(c["S"])(a.formData.cardholderName?a.formData.cardholderName:"-"),1)]),Object(c["k"])("div",v,[g,Object(c["k"])("b",null,Object(c["S"])(a.formData.cardholderNumber?a.formData.cardholderNumber:"-"),1)]),Object(c["k"])("div",D,[p,Object(c["k"])("b",null,Object(c["S"])(a.formData.date?a.formData.date:"-"),1)]),Object(c["k"])("div",h,[S,Object(c["k"])("b",null,Object(c["S"])(a.formData.cvv&&3===a.formData.cvv.length?"**"+a.formData.cvv[2]:"-"),1)])]})),footer:Object(c["Y"])((function(){return[Object(c["k"])("div",A,[Object(c["o"])(P,{label:"Back",onClick:t[0]||(t[0]=function(e){return w.prevPage()}),icon:"pi pi-angle-left"}),Object(c["o"])(P,{label:"Complete",onClick:t[1]||(t[1]=function(e){return w.complete()}),icon:"pi pi-check",iconPos:"right",class:"p-button-success"})])]})),_:1})])}var N={props:{formData:Object},methods:{prevPage:function(){this.$emit("prev-page",{pageIndex:3})},complete:function(){this.$emit("complete")}}},w=a("6b0d"),P=a.n(w);const Y=P()(N,[["render",C]]);t["default"]=Y}}]);