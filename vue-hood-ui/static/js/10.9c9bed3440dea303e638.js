webpackJsonp([10,13],{289:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(o,"__esModule",{value:!0});var i=e(226),s=n(i);o["default"]={name:"demo-modal-tip",components:{ModalTip:s["default"]},data:function(){return{show:!1}},methods:{showTip:function(){var t=this;this.show=!0,setTimeout(function(){t.show=!1},3e3)}}}},309:function(t,o,e){o=t.exports=e(1)(),o.push([t.id,".demo-modal-tip-button{font-size:.28rem;color:#fff;width:100%;padding:.2rem 0;margin-bottom:.01rem;background-color:#65b1db}","",{version:3,sources:["/./src/demo/modal/tip.vue"],names:[],mappings:"AACA,uBACE,iBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,gBAAkB,AAClB,qBAAuB,AACvB,wBAA0B,CAC3B",file:"tip.vue",sourcesContent:["\n.demo-modal-tip-button {\n  font-size: 0.28rem;\n  color: #fff;\n  width: 100%;\n  padding: 0.2rem 0;\n  margin-bottom: 0.01rem;\n  background-color: #65b1db;\n}"],sourceRoot:"webpack://"}])},359:function(t,o,e){var n=e(309);"string"==typeof n&&(n=[[t.id,n,""]]);e(2)(n,{});n.locals&&(t.exports=n.locals)},480:function(t,o,e){var n,i;e(359),n=e(289);var s=e(500);i=n=n||{},"object"!=typeof n["default"]&&"function"!=typeof n["default"]||(i=n=n["default"]),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,t.exports=n},500:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"demo-modal-tip"},[_h("modal-tip",{attrs:{show:show,msg:"但还是卡简单顶级辣椒的"}})," ",_h("button",{staticClass:"demo-modal-tip-button",attrs:{type:"button"},on:{click:showTip}},["Tip"])])},staticRenderFns:[]}}});
//# sourceMappingURL=10.9c9bed3440dea303e638.js.map