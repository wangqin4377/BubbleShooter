ec22074ff13883c5e9be65c34e2e2b65
jsio("import .Widget");jsio("from util.browser import $");
var Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_CheckBox=__class__,CheckBox=exports=Users_tsunami_projects_devkitPoj_BubbleShooter_modules_devkit_core_modules_squill_CheckBox(function(){return this.init&&this.init.apply(this,arguments)},Widget,function(){this._css="checkbox";this._def={tag:"label",children:[{id:"checkbox",tag:"input",attrs:{type:"checkbox"}},{tag:"span",id:"label",text:""}]};this.buildWidget=function(){this.setLabel(this._opts.label||"");this._opts.name&&
this.setName(this._opts.name);this._opts.value&&this.setValue(this._opts.value);this.initMouseEvents(this.checkbox);$.onEvent(this.checkbox,"change",this,"_onCheck");this._opts.__result&&this._opts.__result.addSubscription(this,"Select",this._opts.id)};this._onCheck=function(){this.publish("Check",this.isChecked());this.emit("change",this.isChecked())};this.setLabel=function(a){$.setText(this.label,a)};this.setName=function(a){this.checkbox.name=a};this.setData=this.setValue=function(a){this.checkbox.checked=
!!a};this.isChecked=function(){return this.checkbox.checked};this.setChecked=function(a){this.checkbox.checked=a};this.getValue=function(){return this.isChecked()?this.checkbox.value:null}});
