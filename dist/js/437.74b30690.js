"use strict";(self["webpackChunkhello_09"]=self["webpackChunkhello_09"]||[]).push([[437],{9437:function(o,e,n){n.r(e),n.d(e,{default:function(){return C}});var t=n(3396);function c(o,e,n,c,s,r){const l=(0,t.up)("Confirm");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("button",{onClick:e[0]||(e[0]=(...e)=>o.checkOut&&o.checkOut(...e))},"確認結帳"),s.confirmBox?((0,t.wg)(),(0,t.j4)(l,{key:0})):(0,t.kq)("",!0)],64)}var s=n(7139);const r=o=>((0,t.dD)("data-v-527129ca"),o=o(),(0,t.Cn)(),o),l={key:0,class:"bg_shop_confirm"},i={class:"wrap_shop_confirm"},a=r((()=>(0,t._)("div",{class:"shop_conf_price"},[(0,t._)("h4",null,"應付金額：＄"),(0,t._)("hr")],-1))),u={class:"shop_conf_credit"},f=r((()=>(0,t._)("h4",null,"信用卡資訊",-1))),_=r((()=>(0,t._)("hr",null,null,-1))),d=r((()=>(0,t._)("div",{class:"shop_conf_order_info"},[(0,t._)("h4",null,"收件人資訊"),(0,t._)("p",null,"收件人名字："),(0,t._)("p",null,"收件人電話："),(0,t._)("p",null,"收件人地址：")],-1))),h={class:"confirm_btn_box"},m=r((()=>(0,t._)("button",{class:"btn_confirm",type:"button"},"確認無誤",-1)));function p(o,e,n,c,r,p){return r.confirmBox?((0,t.wg)(),(0,t.iD)("div",l,[(0,t._)("div",i,[a,(0,t._)("div",u,[f,(0,t._)("p",null,"信用卡卡號："+(0,s.zw)(r.showInfo.text),1),_]),d,(0,t._)("div",h,[m,(0,t._)("button",{onClick:e[0]||(e[0]=(...o)=>p.confirmCancel&&p.confirmCancel(...o)),class:"btn_return",type:"button"},"取消")])])])):(0,t.kq)("",!0)}var b={data(){return{confirmBox:!1,showInfo:{}}},methods:{getSessionStorage(){const o=sessionStorage.getItem("confirmInfo");o&&"undefined"!==o&&(this.showInfo=JSON.parse(o))},confirmCancel(){this.confirmBox=!this.confirmBox},completedCancel(){this.completedBox=!this.completedBox}},created(){this.getSessionStorage()}},v=n(89);const g=(0,v.Z)(b,[["render",p],["__scopeId","data-v-527129ca"]]);var k=g,x={beforeRouteEnter(o,e){console.log("beforeRouteEnter about"),setTimeout((()=>{document.getElementById("loading")?.classList.remove("--active")}),1e3)},beforeRouteLeave(o,e){console.log("beforeRouteLeave about"),document.getElementById("loading")?.classList.add("--active")},data(){return{confirmBox:!1}},components:{Confirm:k},methods:{checkBox(){this.confirmBox=!0}}};const B=(0,v.Z)(x,[["render",c]]);var C=B}}]);
//# sourceMappingURL=437.74b30690.js.map