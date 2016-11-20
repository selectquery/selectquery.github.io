webpackJsonp([9,14],{196:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={name:"hd-textarea",props:{unique:String,label:{type:String,required:!0},value:{type:[String,Number],"default":""},placeholder:String,maxlength:[Number,String],disabled:Boolean},data:function(){return{model:this.value}},computed:{wordRecord:function(){return(""+this.model).length+(this.maxlength?"/"+this.maxlength:"")}},watch:{value:function(e){this.model=e}},methods:{onchange:function(){this.$emit("change-value",this.model,this.unique)}}}},203:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,".hd-textarea{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;font-size:.32rem;padding:.25rem .2rem 0;line-height:1.2;border-bottom:.01rem solid #d9d9d9;background-color:#fff}.hd-textarea-label{width:1.6rem;-ms-flex-negative:0;flex-shrink:0;color:#666}.hd-textarea-core{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;border:none;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;resize:none;font-size:inherit;color:inherit;line-height:1.2;height:1.152rem}.hd-textarea-record{width:100%;font-size:.24rem;padding:.1rem;color:#b2b2b2;text-align:right}","",{version:3,sources:["/./src/components/field/textarea.vue"],names:[],mappings:"AACA,aACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,mBAAoB,AACpB,eAAgB,AAChB,iBAAmB,AACnB,uBAA0B,AAC1B,gBAAiB,AACjB,mCAAqC,AACrC,qBAAuB,CACxB,AACD,mBACE,aAAc,AACd,oBAAqB,AACrB,cAAe,AACf,UAAY,CACb,AACD,kBACE,mBAAoB,AACpB,oBAAqB,AACrB,YAAa,AACb,YAAa,AACb,aAAc,AACd,wBAAyB,AACzB,qBAAsB,AACtB,gBAAiB,AACjB,YAAa,AACb,kBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,eAAiB,CAClB,AACD,oBACE,WAAY,AACZ,iBAAmB,AACnB,cAAgB,AAChB,cAAe,AACf,gBAAkB,CACnB",file:"textarea.vue",sourcesContent:["\n.hd-textarea {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  font-size: 0.32rem;\n  padding: 0.25rem 0.2rem 0;\n  line-height: 1.2;\n  border-bottom: 0.01rem solid #d9d9d9;\n  background-color: #fff;\n}\n.hd-textarea-label {\n  width: 1.6rem;\n  -ms-flex-negative: 0;\n  flex-shrink: 0;\n  color: #666;\n}\n.hd-textarea-core {\n  -webkit-box-flex: 1;\n  -ms-flex-positive: 1;\n  flex-grow: 1;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  resize: none;\n  font-size: inherit;\n  color: inherit;\n  line-height: 1.2;\n  height: 1.152rem;\n}\n.hd-textarea-record {\n  width: 100%;\n  font-size: 0.24rem;\n  padding: 0.1rem;\n  color: #b2b2b2;\n  text-align: right;\n}"],sourceRoot:"webpack://"}])},209:function(e,t,n){var a=n(203);"string"==typeof a&&(a=[[e.id,a,""]]);n(2)(a,{});a.locals&&(e.exports=a.locals)},214:function(e,t,n){var a,o;n(209),a=n(196);var r=n(222);o=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},222:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"hd-textarea"},[_h("label",{staticClass:"hd-textarea-label",attrs:{"for":unique},domProps:{textContent:_s(label)}})," ",_h("textarea",{directives:[{name:"model",rawName:"v-model",value:model,expression:"model"}],staticClass:"hd-textarea-core",attrs:{id:unique,placeholder:placeholder,maxlength:maxlength,disabled:disabled},domProps:{value:_s(model)},on:{change:onchange,input:function(e){e.target.composing||(model=e.target.value)}}})," ",_h("div",{staticClass:"hd-textarea-record",domProps:{textContent:_s(wordRecord)}})])},staticRenderFns:[]}},284:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(214),r=a(o);t["default"]={name:"demo-field-textarea",components:{FieldTextarea:r["default"]}}},305:function(e,t,n){t=e.exports=n(1)(),t.push([e.id,"","",{version:3,sources:[],names:[],mappings:"",file:"textarea.vue",sourceRoot:"webpack://"}])},356:function(e,t,n){var a=n(305);"string"==typeof a&&(a=[[e.id,a,""]]);n(2)(a,{});a.locals&&(e.exports=a.locals)},478:function(e,t,n){var a,o;n(356),a=n(284);var r=n(499);o=a=a||{},"object"!=typeof a["default"]&&"function"!=typeof a["default"]||(o=a=a["default"]),"function"==typeof o&&(o=o.options),o.render=r.render,o.staticRenderFns=r.staticRenderFns,e.exports=a},499:function(module,exports){module.exports={render:function(){with(this)return _h("div",{staticClass:"demo-field-text"},[_h("field-textarea",{attrs:{label:"自我介绍",placeholder:"介绍一下自己吧"}})," ",_h("field-textarea",{attrs:{label:"自我介绍",placeholder:"介绍一下自己吧",maxlength:"8"}})," ",_h("field-textarea",{attrs:{label:"自我介绍",value:"的哈萨克家货到付款就好房间打扫了几分到拉萨决定了撒进理发店看见了撒的撒了卡",maxlength:"80",disabled:""}})])},staticRenderFns:[]}}});
//# sourceMappingURL=9.b367ebbe48e6338992a6.js.map